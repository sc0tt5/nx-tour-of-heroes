import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

import { Hero } from '@nx-toh/shared/models';

import { heroDetailActions } from './hero-detail.actions';

export const heroDetailFeatureKey = 'hero-detail';

export interface HeroDetailState {
  hero: Hero;
  loaded: boolean;
  loading: boolean;
}

export const heroDetailInitialState: HeroDetailState = {
  hero: null,
  loaded: false,
  loading: false
};

// helpers ?
const LOADING = { loading: true, loaded: false };
const LOADED = { loading: false, loaded: true };
const RESET = { loading: false, loaded: false };

const reducer = createReducer(
  heroDetailInitialState,
  on(heroDetailActions.createHero, state => ({ ...state, ...LOADING })),
  on(heroDetailActions.createHeroSuccess, (state, { hero }) => ({ ...state, ...hero, ...LOADED })),
  on(heroDetailActions.createHeroFail, state => ({ ...state, ...RESET })),
  on(heroDetailActions.loadHero, state => ({ ...state, ...LOADING })),
  on(heroDetailActions.loadHeroSuccess, (state, payload) => ({
    ...state,
    ...{ hero: payload.hero },
    ...LOADED
  })),
  on(heroDetailActions.loadHeroFail, state => ({ ...state, ...RESET })),
  on(heroDetailActions.resetHeroState, state => ({ ...state, ...heroDetailInitialState })),
  on(heroDetailActions.updateHero, state => ({ ...state, ...LOADING })),
  on(heroDetailActions.updateHeroSuccess, (state, { hero }) => ({ ...state, ...hero, ...LOADED })),
  on(heroDetailActions.updateHeroFail, state => ({ ...state, ...RESET }))
);

export function heroDetailReducer(
  state: HeroDetailState | undefined,
  action: Action
): HeroDetailState {
  return reducer(state, action);
}
