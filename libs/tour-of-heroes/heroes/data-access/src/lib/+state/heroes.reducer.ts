import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

import { Hero } from '@nx-demo/shared/models';

import * as HeroesAction from './heroes.actions';

export interface HeroesState extends EntityState<Hero> {
  selectedHeroId: number | null;
  loaded: boolean;
  loading: boolean;
}

const adapter: EntityAdapter<Hero> = createEntityAdapter<Hero>();

export const initialState: HeroesState = adapter.getInitialState({
  selectedHeroId: null,
  loaded: false,
  loading: false
});

// todo: fix adaptor/entity or rollback to original structure for store
const heroesReducer = createReducer(
  initialState,
  on(HeroesAction.loadHeroes, state => ({ ...state, loading: true })),
  on(HeroesAction.loadHeroesSuccess, (state, payload) =>
    adapter.setAll(payload.heroes, { ...state, loading: false, loaded: true })
  ),
  on(HeroesAction.loadHeroesFail, state => ({
    ...state,
    loading: false,
    loaded: false
  })),
  on(HeroesAction.resetHeroesState, state => initialState)
);

export function reducer(state: HeroesState | undefined, action: Action): HeroesState {
  return heroesReducer(state, action);
}
