export type LlmMessage = {
  role: 'system' | 'user';
  content: string;
};

export class LlmError extends Error {
  code: string;
  status: number;

  constructor(code: string, message: string, status = 502) {
    super(message);
    this.code = code;
    this.status = status;
  }
}

export function getLlmStatus() {
  return {
    configured: Boolean(process.env.ARTICLE_LLM_API_KEY && process.env.ARTICLE_LLM_MODEL),
    modelConfigured: Boolean(process.env.ARTICLE_LLM_MODEL),
    provider: process.env.ARTICLE_LLM_PROVIDER || 'openai_compatible',
  };
}

export function assertLlmConfigured() {
  if (!process.env.ARTICLE_LLM_API_KEY) {
    throw new LlmError('LLM_NOT_CONFIGURED', 'LLM не настроен: задайте ARTICLE_LLM_API_KEY в .env.', 503);
  }

  if (!process.env.ARTICLE_LLM_MODEL) {
    throw new LlmError('LLM_MODEL_NOT_CONFIGURED', 'LLM не настроен: задайте ARTICLE_LLM_MODEL в .env.', 503);
  }
}

function llmTimeoutMs() {
  const raw = Number(process.env.ARTICLE_LLM_TIMEOUT_MS || '120000');
  return Number.isFinite(raw) && raw > 0 ? raw : 120000;
}

function withTimeout(timeoutMs: number) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);

  return {
    signal: controller.signal,
    clear: () => clearTimeout(timeout),
  };
}

export async function callArticleLlm(messages: LlmMessage[]) {
  const apiKey = process.env.ARTICLE_LLM_API_KEY;
  const model = process.env.ARTICLE_LLM_MODEL;
  const baseUrl = (process.env.ARTICLE_LLM_BASE_URL || 'https://api.openai.com/v1').replace(/\/+$/, '');

  assertLlmConfigured();

  const timeout = withTimeout(llmTimeoutMs());

  try {
    const response = await fetch(`${baseUrl}/chat/completions`, {
      method: 'POST',
      signal: timeout.signal,
      headers: {
        authorization: `Bearer ${apiKey}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        model,
        messages,
        temperature: 0.2,
      }),
    });

    if (!response.ok) {
      throw new LlmError('LLM_PROVIDER_ERROR', `LLM provider returned HTTP ${response.status}.`, 502);
    }

    const payload = await response.json();
    const content = payload?.choices?.[0]?.message?.content;

    if (typeof content !== 'string' || !content.trim()) {
      throw new LlmError('LLM_EMPTY_RESPONSE', 'LLM returned an empty article.', 502);
    }

    return content.trim();
  } catch (error) {
    if (error instanceof LlmError) {
      throw error;
    }

    throw new LlmError(
      'LLM_PROVIDER_ERROR',
      error instanceof Error ? error.message : 'LLM provider request failed.',
      502,
    );
  } finally {
    timeout.clear();
  }
}
