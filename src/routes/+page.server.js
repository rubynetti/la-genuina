import { getArticles } from '$lib/articles.js';

export async function load() {
  const articles = await getArticles();

  return {
    articles
  };
}
