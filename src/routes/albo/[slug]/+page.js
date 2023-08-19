import content from './../content.json'

export function load({ params }) {
  return content.seasons.find((item) => item.year === params.slug);
}