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

// helpers ?
const LOADING = { loading: true, loaded: false };
const LOADED = { loading: false, loaded: true };
const FAIL = { loading: false, loaded: false };

// todo: fix adaptor/entity or rollback to original structure for store
const reducer = createReducer(
  heroDetailInitialState,
  // load
  on(heroDetailActions.loadHero, state => ({ ...state, ...LOADING })),
  on(heroDetailActions.loadHeroSuccess, (state, payload) =>
    adapter.setOne(payload.hero, { ...state, ...LOADED })
  ),
  on(heroDetailActions.loadHeroFail, state => ({ ...state, ...FAIL })),
  // select id
  on(heroDetailActions.selectHeroId, (state, { id }) => ({ ...state, selectedHeroId: id })),
  // reset
  on(heroDetailActions.resetHeroState, state => ({ ...state, ...heroDetailInitialState })),
  // update
  on(heroDetailActions.updateHero, state => ({ ...state, ...LOADING })),
  on(heroDetailActions.updateHeroSuccess, (state, { hero }) => {
    console.log({ hero });
    return adapter.updateOne(hero, { ...state, ...LOADED });
  }),
  on(heroDetailActions.updateHeroFail, state => ({ ...state, ...FAIL }))
);

export function heroDetailReducer(
  state: HeroDetailState | undefined,
  action: Action
): HeroDetailState {
  return reducer(state, action);
}
