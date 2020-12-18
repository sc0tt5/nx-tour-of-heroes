import { createFeatureSelector, createSelector } from '@ngrx/store';

import { heroListFeatureKey, HeroListState } from './hero-list.reducer';

// from reducer
const heroesIds = (state: HeroListState) => state.ids;
const heroesEntities = (state: HeroListState) => state.entities;
const heroesLoaded = (state: HeroListState) => state.loaded;
const heroesLoading = (state: HeroListState) => state.loading;

// feature
const heroesFeatureSelector = createFeatureSelector<HeroListState>(heroListFeatureKey);

// heroes state and entities
const getHeroListState = createSelector(heroesFeatureSelector, (state: HeroListState) => state);
const getHeroListIds = createSelector(getHeroListState, heroesIds);
const getHeroListEntities = createSelector(getHeroListState, heroesEntities);

// list
const getHeroes = createSelector(getHeroListIds, getHeroListEntities, (ids: number[], entities) =>
  ids.map(id => entities[id])
);
const getHeroesLoaded = createSelector(getHeroListState, heroesLoaded);
const getHeroesLoading = createSelector(getHeroListState, heroesLoading);

export const heroListSelectors = {
  getHeroes,
  getHeroesLoaded,
  getHeroesLoading
};
