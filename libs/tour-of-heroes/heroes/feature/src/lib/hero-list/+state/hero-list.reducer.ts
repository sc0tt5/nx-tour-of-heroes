import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

import { Hero } from '@nx-demo/shared/models';

import * as HeroListAction from './hero-list.actions';

export const heroListFeatureKey = 'hero-list';

export interface HeroesState extends EntityState<Hero> {
  loaded: boolean;
  loading: boolean;
}

const adapter: EntityAdapter<Hero> = createEntityAdapter<Hero>();

export const initialState: HeroesState = adapter.getInitialState({
  loaded: false,
  loading: false
});

// todo: fix adaptor/entity or rollback to original structure for store
const heroesReducer = createReducer(
  initialState,
  // list
  on(HeroListAction.loadHeroes, state => ({ ...state, loading: true })),
  on(HeroListAction.loadHeroesSuccess, (state, payload) =>
    adapter.setAll(payload.heroes, { ...state, loading: false, loaded: true })
  ),
  on(HeroListAction.loadHeroesFail, state => ({
    ...state,
    loading: false,
    loaded: false
  }))
);

export function reducer(state: HeroesState | undefined, action: Action): HeroesState {
  return heroesReducer(state, action);
}
