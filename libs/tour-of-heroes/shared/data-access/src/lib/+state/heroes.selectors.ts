import { createFeatureSelector, createSelector } from '@ngrx/store';

import { heroesFeatureKey, HeroesState } from './heroes.state';

// feature
const selectHeroesFeature = createFeatureSelector<HeroesState>(heroesFeatureKey);

// projectors
const heroIds = (state: HeroesState) => state.ids;
const heroEntities = (state: HeroesState) => state.entities;
const loaded = (state: HeroesState) => state.loaded;
const loading = (state: HeroesState) => state.loading;

// selectors
const selectHeroesState = createSelector(selectHeroesFeature, (state: HeroesState) => state);
const selectHeroIds = createSelector(selectHeroesState, heroIds);
const selectHeroEntities = createSelector(selectHeroesState, heroEntities);
const selectHeroes = createSelector(selectHeroIds, selectHeroEntities, (ids: number[], entities) =>
  ids.map(id => entities[id])
);
const selectHeroesLoaded = createSelector(selectHeroesState, loaded);
const selectHeroesLoading = createSelector(selectHeroesState, loading);

// public
export const heroesSelectors = {
  selectHeroesState,
  selectHeroes,
  selectHeroesLoaded,
  selectHeroesLoading
};
