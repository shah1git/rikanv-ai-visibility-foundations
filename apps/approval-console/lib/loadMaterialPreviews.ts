import { readFileSync } from 'node:fs';
import path from 'node:path';
import type { Material } from './types';

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

function fallbackPreview(material: Material) {
  return [
    '# Предпросмотр не найден',
    '',
    `Артефакт: ${material.preview_path}`,
    '',
    'Bundled preview file was not found in the Approval Console sample data.',
  ].join('\n');
}

export function loadMaterialPreviews(materials: Material[]): Record<string, string> {
  return Object.fromEntries(
    materials.map((material) => {
      const previewPath = previewPathFor(material.material_id);

      if (!previewPath) {
        return [material.material_id, fallbackPreview(material)];
      }

      try {
        return [material.material_id, readFileSync(previewPath, 'utf-8')];
      } catch {
        return [material.material_id, fallbackPreview(material)];
      }
    }),
  );
}
