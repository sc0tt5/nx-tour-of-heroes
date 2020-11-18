import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import { HeroesState, reducer } from './heroes.reducer';

// from reducer
const heroesEntities = (state: HeroesState) => state.entities;
const heroesLoaded = (state: HeroesState) => state.loaded;
const heroesLoading = (state: HeroesState) => state.loading;
const selectedHero = (state: HeroesState) => state.selectedHeroId;

// feature
const heroesFeatureSelector = createFeatureSelector<HeroesState>('heroes');

// heroes state
const getHeroesState = createSelector(heroesFeatureSelector, (state: HeroesState) => state);
const getHeroesEntities = createSelector(getHeroesState, heroesEntities);
const getHeroes = createSelector(getHeroesEntities, entities =>
  Object.keys(entities).map(id => entities[parseInt(id, 10)])
);
const getHeroesLoaded = createSelector(getHeroesState, heroesLoaded);
const getHeroesLoading = createSelector(getHeroesState, heroesLoading);
const getSelectedHero = createSelector(getHeroesState, selectedHero);

export const heroesSelectors = {
  getHeroes,
  getHeroesLoaded,
  getHeroesLoading,
  getSelectedHero
};
