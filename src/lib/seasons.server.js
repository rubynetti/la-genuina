import { parseMarkdownFiles } from './markdown.server.js';

const files = import.meta.glob('../routes/albo/seasons/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
});

const seasons = parseMarkdownFiles(files)
  .map((s) => ({ ...s, year: s.year ?? s.slug }))
  .sort((a, b) => String(a.year).localeCompare(String(b.year)));

export const allSeasons = seasons;

export function getSeason(year) {
  return allSeasons.find((s) => s.year === year);
}
