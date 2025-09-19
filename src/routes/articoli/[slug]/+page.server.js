import { getArticleBySlug } from '$lib/articles.js';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
  const article = await getArticleBySlug(params.slug);

  if (!article) {
    throw error(404, 'Articolo non trovato');
  }

  return {
    article
  };
}
