import { createSelector } from '@ngrx/store';

import { heroesSelectors } from '../heroes.selectors';
import { HeroesState } from '../heroes.state';

// projectors
const searchTerm = (state: HeroesState) => state.searchTerm;

// selectors
const getSearchTerm = createSelector(heroesSelectors.getHeroesState, searchTerm);
const getFilteredHeroes = createSelector(
  heroesSelectors.getHeroes,
  getSearchTerm,
  (heroes, term: string) => heroes.filter(hero => hero.name.toLowerCase().includes(term))
);

export const heroSearchSelectors = { getFilteredHeroes };
