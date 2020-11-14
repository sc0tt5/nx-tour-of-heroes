import { createFeatureSelector, createSelector } from '@ngrx/store';

import { HeroesState } from './heroes.reducer';

// feature
const heroesFeatureSelector = createFeatureSelector<HeroesState>('heroes');

const getHeroes = createSelector(heroesFeatureSelector, (state: HeroesState) => state.heroes);

const getHeroesLoaded = createSelector(heroesFeatureSelector, (state: HeroesState) => state.loaded);

const getHeroesLoading = createSelector(
  heroesFeatureSelector,
  (state: HeroesState) => state.loading
);

export const heroesSelectors = {
  getHeroes,
  getHeroesLoaded,
  getHeroesLoading
};
