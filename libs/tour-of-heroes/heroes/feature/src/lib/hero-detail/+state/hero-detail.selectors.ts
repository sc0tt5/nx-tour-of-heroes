import { createFeatureSelector, createSelector } from '@ngrx/store';

import { heroDetailFeatureKey, HeroDetailState } from './hero-detail.reducer';

// from reducer
const selectedHero = (state: HeroDetailState) => state.hero;
const heroDetailLoaded = (state: HeroDetailState) => state.loaded;
const heroDetailLoading = (state: HeroDetailState) => state.loading;

// feature
const heroDetailFeatureSelector = createFeatureSelector<HeroDetailState>(heroDetailFeatureKey);

// heroes state and entities
const getHeroDetailState = createSelector(
  heroDetailFeatureSelector,
  (state: HeroDetailState) => state
);

const getSelectedHero = createSelector(getHeroDetailState, selectedHero);
const getHeroLoaded = createSelector(getHeroDetailState, heroDetailLoaded);
const getHeroLoading = createSelector(getHeroDetailState, heroDetailLoading);

export const heroDetailSelectors = {
  getSelectedHero,
  getHeroLoaded,
  getHeroLoading
};
