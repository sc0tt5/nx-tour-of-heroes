import { createFeatureSelector, createSelector } from '@ngrx/store';

import { heroDetailFeatureKey, HeroDetailState } from './hero-detail.reducer';

// from reducer
const heroDetailEntities = (state: HeroDetailState) => state.entities; // todo: ? entities?
const heroDetailLoaded = (state: HeroDetailState) => state.loaded;
const heroDetailLoading = (state: HeroDetailState) => state.loading;
const selectedHero = (state: HeroDetailState) => state.entities[state.selectedHeroId];

// feature
const heroDetailFeatureSelector = createFeatureSelector<HeroDetailState>(heroDetailFeatureKey);

// heroes state and entities
const getHeroDetailState = createSelector(
  heroDetailFeatureSelector,
  (state: HeroDetailState) => state
);
// const getHeroesEntities = createSelector(getHeroDetailState, heroDetailEntities);

// single
const getHero = createSelector(getHeroDetailState, heroDetailEntities);
const getHeroLoaded = createSelector(getHeroDetailState, heroDetailLoaded);
const getHeroLoading = createSelector(getHeroDetailState, heroDetailLoading);

// selected hero
const getSelectedHero = createSelector(getHeroDetailState, selectedHero);

export const heroDetailSelectors = {
  getHero,
  getHeroLoaded,
  getHeroLoading,
  getSelectedHero
};
