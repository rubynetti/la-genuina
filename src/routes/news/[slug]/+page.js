import content from './../content.json';

export function load({ params }) {
  return content.news.find((item) => item.slug === params.slug);
}

export function entries() {
  return content.news.map((item) => ({ slug: item.slug }));
}
