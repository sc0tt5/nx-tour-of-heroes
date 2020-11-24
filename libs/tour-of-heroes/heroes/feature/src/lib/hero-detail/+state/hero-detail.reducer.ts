import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

import { Hero } from '@nx-demo/shared/models';

import { heroDetailActions } from './hero-detail.actions';

export const heroDetailFeatureKey = 'hero-detail';

export interface HeroDetailState extends EntityState<Hero> {
  selectedHeroId: number | null;
  loaded: boolean;
  loading: boolean;
}

const adapter: EntityAdapter<Hero> = createEntityAdapter<Hero>();

export const heroDetailInitialState: HeroDetailState = adapter.getInitialState({
  selectedHeroId: null,
  loaded: false,
  loading: false
});

// todo: fix adaptor/entity or rollback to original structure for store
const reducer = createReducer(
  heroDetailInitialState,
  // one
  on(heroDetailActions.loadHero, state => ({ ...state, loading: true })),
  on(heroDetailActions.loadHeroSuccess, (state, payload) =>
    adapter.setOne(payload.hero, { ...state, loading: false, loaded: true })
  ),
  on(heroDetailActions.loadHeroFail, state => ({
    ...state,
    loading: false,
    loaded: false
  })),
  // select id
  on(heroDetailActions.selectHeroId, (state, { id }) => ({ ...state, selectedHeroId: id })),
  // reset
  on(heroDetailActions.resetHeroState, state => ({ ...state, ...heroDetailInitialState }))
);

export function heroDetailReducer(
  state: HeroDetailState | undefined,
  action: Action
): HeroDetailState {
  return reducer(state, action);
}
