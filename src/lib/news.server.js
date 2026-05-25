import matter from 'gray-matter';
import { marked } from 'marked';

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

const posts = Object.entries(files).map(([path, raw]) => {
  const slug = path.split('/').pop().replace(/\.md$/, '');
  const { data, content } = matter(raw);
  return {
    slug,
    ...data,
    body: marked.parse(content.trim()),
    _sort: parseDate(data.date),
  };
});

posts.sort((a, b) => b._sort - a._sort);

export const allNews = posts.map(({ _sort, ...rest }) => rest);

export function getNews(slug) {
  return allNews.find((n) => n.slug === slug);
}
