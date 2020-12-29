import { Action, createReducer, on } from '@ngrx/store';

// prettier-ignore
import { adapter, heroesInitialState, HeroesState, LOADED, LOADING, RESET } from '@nx-toh/tour-of-heroes/shared/data-access';

import { heroListActions } from './list.actions';

// todo: how to create multiple reducers with single state???
const reducer = createReducer(
  heroesInitialState,
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

export function heroListReducer(state: HeroesState | undefined, action: Action): HeroesState {
  return reducer(state, action);
}
