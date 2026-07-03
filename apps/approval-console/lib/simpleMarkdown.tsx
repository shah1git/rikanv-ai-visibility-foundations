import type { ReactNode } from 'react';

type TableBlock = {
  headers: string[];
  rows: string[][];
};

function isTableRow(line: string) {
  const trimmed = line.trim();
  return trimmed.startsWith('|') && trimmed.endsWith('|');
}

function isTableSeparator(line: string) {
  return /^\|\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?$/.test(line.trim());
}

function parseTable(lines: string[], startIndex: number): { block: TableBlock; nextIndex: number } {
  const tableLines: string[] = [];
  let index = startIndex;

  while (index < lines.length && isTableRow(lines[index])) {
    tableLines.push(lines[index]);
    index += 1;
  }

  const rows = tableLines
    .filter((line) => !isTableSeparator(line))
    .map((line) =>
      line
        .trim()
        .replace(/^\|/, '')
        .replace(/\|$/, '')
        .split('|')
        .map((cell) => cell.trim()),
    );

  const [headers = [], ...bodyRows] = rows;

  return {
    block: {
      headers,
      rows: bodyRows,
    },
    nextIndex: index,
  };
}

function renderTable(block: TableBlock, key: string) {
  return (
    <div className="markdown-table-wrap" key={key}>
      <table>
        <thead>
          <tr>
            {block.headers.map((header, index) => (
              <th key={`${key}-head-${index}`}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {block.rows.map((row, rowIndex) => (
            <tr key={`${key}-row-${rowIndex}`}>
              {row.map((cell, cellIndex) => (
                <td key={`${key}-cell-${rowIndex}-${cellIndex}`}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function renderParagraph(lines: string[], key: string) {
  return <p key={key}>{lines.join(' ')}</p>;
}

function renderList(items: string[], key: string) {
  return (
    <ul key={key}>
      {items.map((item, index) => (
        <li key={`${key}-item-${index}`}>{item}</li>
      ))}
    </ul>
  );
}

function renderFrontmatter(lines: string[], key: string) {
  return (
    <pre className="markdown-frontmatter" key={key}>
      {lines.join('\n')}
    </pre>
  );
}

export function renderSimpleMarkdown(markdown: string): ReactNode[] {
  const lines = markdown.replace(/\r\n/g, '\n').split('\n');
  const nodes: ReactNode[] = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index];
    const trimmed = line.trim();
    const key = `md-${index}`;

    if (!trimmed) {
      index += 1;
      continue;
    }

    if (index === 0 && trimmed === '---') {
      const frontmatter: string[] = [line];
      index += 1;

      while (index < lines.length) {
        frontmatter.push(lines[index]);
        if (lines[index].trim() === '---') {
          index += 1;
          break;
        }
        index += 1;
      }

      nodes.push(renderFrontmatter(frontmatter, key));
      continue;
    }

    const heading = /^(#{1,3})\s+(.+)$/.exec(trimmed);
    if (heading) {
      const level = heading[1].length;
      const text = heading[2];

      if (level === 1) {
        nodes.push(<h1 key={key}>{text}</h1>);
      } else if (level === 2) {
        nodes.push(<h2 key={key}>{text}</h2>);
      } else {
        nodes.push(<h3 key={key}>{text}</h3>);
      }

      index += 1;
      continue;
    }

    if (trimmed.startsWith('- ')) {
      const items: string[] = [];

      while (index < lines.length && lines[index].trim().startsWith('- ')) {
        items.push(lines[index].trim().slice(2));
        index += 1;
      }

      nodes.push(renderList(items, key));
      continue;
    }

    if (isTableRow(line)) {
      const { block, nextIndex } = parseTable(lines, index);
      nodes.push(renderTable(block, key));
      index = nextIndex;
      continue;
    }

    const paragraphLines: string[] = [trimmed];
    index += 1;

    while (
      index < lines.length &&
      lines[index].trim() &&
      !/^(#{1,3})\s+/.test(lines[index].trim()) &&
      !lines[index].trim().startsWith('- ') &&
      !isTableRow(lines[index])
    ) {
      paragraphLines.push(lines[index].trim());
      index += 1;
    }

    nodes.push(renderParagraph(paragraphLines, key));
  }

  return nodes;
}
