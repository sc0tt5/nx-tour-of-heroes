import { Action, createReducer, on } from '@ngrx/store';

// prettier-ignore
import { adapter, heroesInitialState, HeroesState, LOADED, LOADING, RESET } from '@nx-toh/tour-of-heroes/shared/data-access';

import { heroDetailActions } from './detail.actions';

// todo: how to create multiple reducers with single state???
const reducer = createReducer(
  heroesInitialState,
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
  on(heroDetailActions.updateHeroFail, state => ({ ...state, ...RESET }))
);

export function heroDetailReducer(state: HeroesState | undefined, action: Action): HeroesState {
  return reducer(state, action);
}
