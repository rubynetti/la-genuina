import { parseMarkdownFiles } from './markdown.server.js';

const files = import.meta.glob('../routes/news/posts/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
});

const ITALIAN_MONTHS = {
  gennaio: 0, febbraio: 1, marzo: 2, aprile: 3, maggio: 4, giugno: 5,
  luglio: 6, agosto: 7, settembre: 8, ottobre: 9, novembre: 10, dicembre: 11,
};

function parseDate(value) {
  if (!value) return 0;
  const match = String(value).trim().toLowerCase().match(/^(\d{1,2})\s+([a-zà-ú]+)\s+(\d{4})$/);
  if (!match) return 0;
  const [, day, month, year] = match;
  const m = ITALIAN_MONTHS[month];
  if (m === undefined) return 0;
  return new Date(Number(year), m, Number(day)).getTime();
}

const posts = parseMarkdownFiles(files)
  .map((p) => ({ ...p, _sort: parseDate(p.date) }))
  .sort((a, b) => b._sort - a._sort)
  .map(({ _sort, ...rest }) => rest);

export const allNews = posts;

export function getNews(slug) {
  return allNews.find((n) => n.slug === slug);
}
