export type MediaHubProduct = {
  active?: boolean;
  article?: string;
  name?: string;
  specType?: string;
  specs?: Record<string, unknown>;
  [key: string]: unknown;
};

export class MediaHubError extends Error {
  code: string;

  constructor(code: string, message: string) {
    super(message);
    this.code = code;
  }
}

function normalize(value: string) {
  return value
    .toLowerCase()
    .replace(/ё/g, 'е')
    .replace(/rikanv/g, '')
    .replace(/[^a-zа-я0-9]+/gi, ' ')
    .trim()
    .replace(/\s+/g, ' ');
}

function withTimeout(timeoutMs: number) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);

  return {
    signal: controller.signal,
    clear: () => clearTimeout(timeout),
  };
}

export async function fetchJson(url: string, timeoutMs = 20000): Promise<unknown> {
  const timeout = withTimeout(timeoutMs);

  try {
    const response = await fetch(url, {
      signal: timeout.signal,
      headers: {
        accept: 'application/json',
      },
    });

    if (!response.ok) {
      throw new MediaHubError('FETCH_FAILED', `Media Hub returned HTTP ${response.status} for ${url}`);
    }

    return response.json();
  } catch (error) {
    if (error instanceof MediaHubError) {
      throw error;
    }

    throw new MediaHubError(
      'FETCH_FAILED',
      error instanceof Error ? error.message : 'Media Hub request failed',
    );
  } finally {
    timeout.clear();
  }
}

function collectProducts(value: unknown, products: MediaHubProduct[] = []) {
  if (!value || typeof value !== 'object') {
    return products;
  }

  if (Array.isArray(value)) {
    for (const item of value) {
      collectProducts(item, products);
    }

    return products;
  }

  const record = value as Record<string, unknown>;
  const candidate = record as MediaHubProduct;

  if (typeof candidate.name === 'string' && candidate.specs && typeof candidate.specs === 'object') {
    products.push(candidate);
  }

  for (const child of Object.values(record)) {
    collectProducts(child, products);
  }

  return products;
}

function scoreProduct(product: MediaHubProduct, productName: string) {
  const target = normalize(productName);
  const name = normalize(product.name ?? '');
  const article = normalize(product.article ?? '');

  if (name === target || article === target) {
    return 100;
  }

  if (name && (name.includes(target) || target.includes(name))) {
    return 80;
  }

  const shortTarget = normalize(productName.replace(/^RikaNV\s+/i, ''));
  if (shortTarget && name.includes(shortTarget)) {
    return 70;
  }

  return 0;
}

export function findProduct(catalog: unknown, productName: string): MediaHubProduct {
  const matches = collectProducts(catalog)
    .map((product) => ({
      product,
      score: scoreProduct(product, productName),
    }))
    .filter((match) => match.score > 0)
    .sort((left, right) => right.score - left.score);

  if (matches.length === 0) {
    throw new MediaHubError('PRODUCT_NOT_FOUND', `Product not found in Media Hub catalog: ${productName}`);
  }

  const bestScore = matches[0].score;
  const bestMatches = matches.filter((match) => match.score === bestScore);

  if (bestMatches.length > 1) {
    const names = bestMatches.map((match) => match.product.name ?? 'unnamed').join(', ');
    throw new MediaHubError('PRODUCT_AMBIGUOUS', `Product match is ambiguous: ${names}`);
  }

  const product = bestMatches[0].product;

  if (product.active === false) {
    throw new MediaHubError('PRODUCT_INACTIVE', `Product is inactive in Media Hub catalog: ${product.name}`);
  }

  return product;
}

export function resolveSchemaUrl(schemaUrlTemplate: string, specType: string) {
  if (!specType) {
    throw new MediaHubError('SPEC_TYPE_MISSING', 'Product has no specType.');
  }

  return schemaUrlTemplate.replace('{specType}', specType);
}

export async function fetchSchema(schemaUrl: string) {
  return fetchJson(schemaUrl);
}
