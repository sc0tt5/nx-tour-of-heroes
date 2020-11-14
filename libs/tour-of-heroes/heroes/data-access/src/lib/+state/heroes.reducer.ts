import { Action, createReducer, on } from '@ngrx/store';

import { Hero } from '@nx-demo/shared/models';

import * as HeroesAction from './heroes.actions';

export interface HeroesState {
  heroes: Hero[];
  loading: boolean;
  loaded: boolean;
}

export const initialState: HeroesState = {
  heroes: null,
  loaded: false,
  loading: false
};

const reducer = createReducer(
  initialState,
  on(HeroesAction.loadHeroes, state => ({ ...state, loading: true, loaded: false })),
  on(HeroesAction.loadHeroesSuccess, (state, payload) => ({
    ...state,
    heroes: payload.heroes,
    loading: false,
    loaded: !!payload.heroes // only true if not empty
  })),
  on(HeroesAction.loadHeroesFail, state => ({
    ...state,
    heroes: initialState.heroes,
    loading: false,
    loaded: false
  })),
  on(HeroesAction.initializeHeroes, state => initialState)
);

export function heroesReducer(state: HeroesState | undefined, action: Action): HeroesState {
  return reducer(state, action);
}
