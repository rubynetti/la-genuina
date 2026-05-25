import { allSeasons } from '$lib/seasons.server.js';

export function load() {
  return { seasons: allSeasons };
}
