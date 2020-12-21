import { createFeatureSelector, createSelector } from '@ngrx/store';

import { heroesFeatureKey, HeroesState } from './heroes.state';

// feature
const heroesFeatureSelector = createFeatureSelector<HeroesState>(heroesFeatureKey);

// projectors
const heroIds = (state: HeroesState) => state.ids;
const heroEntities = (state: HeroesState) => state.entities;
const loaded = (state: HeroesState) => state.loaded;
const loading = (state: HeroesState) => state.loading;

// selectors
const getHeroesState = createSelector(heroesFeatureSelector, (state: HeroesState) => state);
const getHeroIds = createSelector(getHeroesState, heroIds);
const getHeroEntities = createSelector(getHeroesState, heroEntities);
const getHeroes = createSelector(getHeroIds, getHeroEntities, (ids: number[], entities) =>
  ids.map(id => entities[id])
);
const getHeroesLoaded = createSelector(getHeroesState, loaded);
const getHeroesLoading = createSelector(getHeroesState, loading);

// public
export const heroesSelectors = {
  getHeroesState,
  getHeroes,
  getHeroesLoaded,
  getHeroesLoading
};
