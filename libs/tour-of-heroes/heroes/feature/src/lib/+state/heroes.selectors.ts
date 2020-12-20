import { createFeatureSelector, createSelector } from '@ngrx/store';

import { heroesFeatureKey, HeroesState } from './heroes.state';

export const heroesFeatureSelector = createFeatureSelector<HeroesState>(heroesFeatureKey);

export const heroIds = (state: HeroesState) => state.ids;
export const heroEntities = (state: HeroesState) => state.entities;
export const loaded = (state: HeroesState) => state.loaded;
export const loading = (state: HeroesState) => state.loading;
export const selectedHero = (state: HeroesState) => state.entities[state.selectedHeroId];

export const getHeroesState = createSelector(heroesFeatureSelector, (state: HeroesState) => state);
