import { createSelector } from '@ngrx/store';

import { heroesSelectors, HeroesState } from '@nx-toh/tour-of-heroes/shared/data-access';

// projectors
const searchTerm = (state: HeroesState) => state.searchTerm;

// selectors
const getSearchTerm = createSelector(heroesSelectors.getHeroesState, searchTerm);
const getFilteredHeroes = createSelector(
  heroesSelectors.getHeroes,
  getSearchTerm,
  (heroes, term: string) => {
    console.log('1 - getFilteredHeroes', heroes);
    console.log('2 - getFilteredHeroes', term);
    return heroes.filter(hero => hero.name.toLowerCase().includes(term));
  }
);

export const heroSearchSelectors = { getFilteredHeroes };
