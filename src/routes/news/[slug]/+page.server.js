import { allNews, getNews } from '$lib/news.server.js';

export function load({ params }) {
  return getNews(params.slug);
}

export function entries() {
  return allNews.map((item) => ({ slug: item.slug }));
}
