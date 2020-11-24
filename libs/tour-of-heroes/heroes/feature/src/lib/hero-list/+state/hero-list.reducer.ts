import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

import { Hero } from '@nx-demo/shared/models';

import { heroListActions } from './hero-list.actions';

export const heroListFeatureKey = 'hero-list';

export interface HeroListState extends EntityState<Hero> {
  loaded: boolean;
  loading: boolean;
}

const adapter: EntityAdapter<Hero> = createEntityAdapter<Hero>();

export const heroListInitialState: HeroListState = adapter.getInitialState({
  loaded: false,
  loading: false
});

const reducer = createReducer(
  heroListInitialState,
  on(heroListActions.loadHeroes, state => ({ ...state, loading: true })),
  on(heroListActions.loadHeroesSuccess, (state, payload) =>
    adapter.setAll(payload.heroes, { ...state, loading: false, loaded: true })
  ),
  on(heroListActions.loadHeroesFail, state => ({
    ...state,
    loading: false,
    loaded: false
  }))
);

export function heroListReducer(state: HeroListState | undefined, action: Action): HeroListState {
  return reducer(state, action);
}
