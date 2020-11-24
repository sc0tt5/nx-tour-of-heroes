import { createFeatureSelector, createSelector } from '@ngrx/store';

import { heroListFeatureKey, HeroListState } from './hero-list.reducer';

// from reducer
const heroesEntities = (state: HeroListState) => state.entities;
const heroesLoaded = (state: HeroListState) => state.loaded;
const heroesLoading = (state: HeroListState) => state.loading;

// feature
const heroesFeatureSelector = createFeatureSelector<HeroListState>(heroListFeatureKey);

// heroes state and entities
const getHeroListState = createSelector(heroesFeatureSelector, (state: HeroListState) => state);
const getHeroListEntities = createSelector(getHeroListState, heroesEntities);

// list
const getHeroes = createSelector(getHeroListEntities, entities =>
  Object.keys(entities).map(id => entities[parseInt(id, 10)])
);
const getHeroesLoaded = createSelector(getHeroListState, heroesLoaded);
const getHeroesLoading = createSelector(getHeroListState, heroesLoading);

export const heroListSelectors = {
  getHeroes,
  getHeroesLoaded,
  getHeroesLoading
};
