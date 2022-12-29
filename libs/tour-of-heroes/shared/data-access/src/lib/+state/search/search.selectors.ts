import { createSelector } from '@ngrx/store';

import { heroesSelectors } from '../heroes.selectors';
import { HeroesState } from '../heroes.state';

// projectors
const searchTerm = (state: HeroesState) => state.searchTerm;

// selectors
const selectSearchTerm = createSelector(heroesSelectors.selectHeroesState, searchTerm);
const selectFilteredHeroes = createSelector(heroesSelectors.selectHeroes, selectSearchTerm, (heroes, term: string) =>
  heroes.filter(hero => hero.name.toLowerCase().includes(term))
);

export const heroSearchSelectors = { selectFilteredHeroes };
