import { readFileSync } from 'node:fs';
import path from 'node:path';
import type { Material } from './types';

export type PreviewLoadResult = {
  error?: string;
  fileName: string;
  found: boolean;
  markdown: string;
};

const PREVIEW_FILES: Record<string, string> = {
  'mat-ovod-l25': 'ovod-l25.md',
  'mat-lesnik2-650l': 'lesnik2-650l.md',
  'mat-surok-l15': 'surok-l15.md',
  'mat-hypnose2-650l': 'hypnose2-650l.md',
};

const PREVIEW_DIR = path.resolve(process.cwd(), 'sample-data', 'material-previews');

function previewPathFor(materialId: string) {
  const fileName = PREVIEW_FILES[materialId];

  if (!fileName) {
    return null;
  }

  const resolved = path.resolve(PREVIEW_DIR, fileName);
  const allowedPrefix = `${PREVIEW_DIR}${path.sep}`;

  if (!resolved.startsWith(allowedPrefix)) {
    throw new Error(`Preview path escaped allowed directory for ${materialId}`);
  }

  return resolved;
}

function fallbackPreview(material: Material, fileName: string, error: string): PreviewLoadResult {
  const lines = [
    '# Предпросмотр не найден',
    '',
    `Артефакт: ${material.preview_path}`,
    '',
    `Причина: ${error}`,
    '',
    'Bundled preview file was not found in the Approval Console sample data.',
  ];

  return {
    error,
    fileName,
    found: false,
    markdown: lines.join('\n'),
  };
}

export function loadMaterialPreviews(materials: Material[]): Record<string, PreviewLoadResult> {
  return Object.fromEntries(
    materials.map((material) => {
      const previewPath = previewPathFor(material.material_id);
      const fileName = PREVIEW_FILES[material.material_id] ?? 'not-mapped.md';

      if (!previewPath) {
        return [
          material.material_id,
          fallbackPreview(material, fileName, `No bundled preview mapping for ${material.material_id}`),
        ];
      }

      try {
        return [
          material.material_id,
          {
            fileName,
            found: true,
            markdown: readFileSync(previewPath, 'utf-8'),
          },
        ];
      } catch (error) {
        const message = error instanceof Error ? error.message : 'Unknown preview load error';
        return [material.material_id, fallbackPreview(material, fileName, message)];
      }
    }),
  );
}
