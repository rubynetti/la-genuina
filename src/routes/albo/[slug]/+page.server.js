import { allSeasons, getSeason } from '$lib/seasons.server.js';

export function load({ params }) {
  return getSeason(params.slug);
}

export function entries() {
  return allSeasons.map((s) => ({ slug: s.year }));
}
