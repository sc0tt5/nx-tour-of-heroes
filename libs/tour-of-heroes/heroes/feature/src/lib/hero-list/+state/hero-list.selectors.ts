import { createFeatureSelector, createSelector } from '@ngrx/store';

import { HeroesState, heroListFeatureKey } from './hero-list.reducer';

// from reducer
const heroesEntities = (state: HeroesState) => state.entities;
const heroesLoaded = (state: HeroesState) => state.loaded;
const heroesLoading = (state: HeroesState) => state.loading;

// feature
const heroesFeatureSelector = createFeatureSelector<HeroesState>(heroListFeatureKey);

// heroes state and entities
const getHeroesState = createSelector(heroesFeatureSelector, (state: HeroesState) => state);
const getHeroesEntities = createSelector(getHeroesState, heroesEntities);

// list
const getHeroes = createSelector(getHeroesEntities, entities =>
  Object.keys(entities).map(id => entities[parseInt(id, 10)])
);
const getHeroesLoaded = createSelector(getHeroesState, heroesLoaded);
const getHeroesLoading = createSelector(getHeroesState, heroesLoading);

export const heroListSelectors = {
  getHeroes,
  getHeroesLoaded,
  getHeroesLoading
};
