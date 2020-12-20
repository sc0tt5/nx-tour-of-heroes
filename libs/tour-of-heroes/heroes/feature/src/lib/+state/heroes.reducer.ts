import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

import { Hero } from '@nx-toh/shared/models';

import { heroDetailActions } from '../hero-detail/+state/hero-detail.actions';
import { heroListActions } from '../hero-list/+state/hero-list.actions';
import { adapter, heroesInitialState, HeroesState } from './heroes.state';

const LOADING = { loading: true, loaded: false };
const LOADED = { loading: false, loaded: true };
const RESET = { loading: false, loaded: false };

// todo: how to create two reducers with single state???
const reducer = createReducer(
  heroesInitialState,
  // hero-detail
  on(heroDetailActions.createHero, state => ({ ...state, ...LOADING })),
  on(heroDetailActions.createHeroSuccess, (state, { hero }) =>
    adapter.updateOne(hero, { ...state, ...LOADED })
  ),
  on(heroDetailActions.createHeroFail, state => ({ ...state, ...RESET })),
  on(heroDetailActions.loadHero, state => ({ ...state, ...LOADING })),
  on(heroDetailActions.loadHeroSuccess, (state, payload) =>
    adapter.setOne(payload.hero, { ...state, ...LOADED })
  ),
  on(heroDetailActions.loadHeroFail, state => ({ ...state, ...RESET })),
  on(heroDetailActions.selectHeroId, (state, { id }) => ({ ...state, selectedHeroId: id })),
  on(heroDetailActions.resetSelectedHeroId, state => ({ ...state, ...{ selectedHeroId: null } })),
  on(heroDetailActions.updateHero, state => ({ ...state, ...LOADING })),
  on(heroDetailActions.updateHeroSuccess, (state, { hero }) =>
    adapter.updateOne(hero, { ...state, ...LOADED })
  ),
  on(heroDetailActions.updateHeroFail, state => ({ ...state, ...RESET })),
  // hero-list
  on(heroListActions.loadHeroes, state => ({ ...state, ...LOADING })),
  on(heroListActions.loadHeroesSuccess, (state, payload) =>
    adapter.setAll(payload.heroes, { ...state, ...LOADED })
  ),
  on(heroListActions.loadHeroesFail, state => ({ ...state, ...RESET })),
  on(heroListActions.removeHero, state => ({ ...state, ...LOADING })),
  on(heroListActions.removeHeroSuccess, (state, { id }) =>
    adapter.removeOne(id, { ...state, ...LOADED })
  ),
  on(heroListActions.removeHeroFail, state => ({ ...state, ...RESET })),
  on(heroListActions.selectHero, state => ({ ...state, ...RESET }))
);

export function heroesReducer(state: HeroesState | undefined, action: Action): HeroesState {
  return reducer(state, action);
}
