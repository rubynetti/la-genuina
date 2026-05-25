import { allNews } from '$lib/news.server.js';

export function load() {
  return { news: allNews };
}
