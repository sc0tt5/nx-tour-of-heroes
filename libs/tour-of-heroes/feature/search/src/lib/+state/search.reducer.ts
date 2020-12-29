import { Action, createReducer, on } from '@ngrx/store';

// prettier-ignore
import { adapter, heroesInitialState, HeroesState, LOADED, LOADING, RESET } from '@nx-toh/tour-of-heroes/shared/data-access';

import { heroSearchActions } from './search.actions';

// todo: how to create multiple reducers with single state???
const reducer = createReducer(
  heroesInitialState,
  on(heroSearchActions.resetSearchTerm, state => ({ ...state, ...{ searchTerm: null } })),
  on(heroSearchActions.searchHeroes, (state, { name }) => {
    console.log('[C] search term:::', name);
    return {
      ...state,
      ...LOADING,
      searchTerm: name ? name.toLowerCase() : null
    };
  }),
  on(heroSearchActions.searchHeroesSuccess, (state, payload) =>
    adapter.upsertMany(payload.heroes, { ...state, ...LOADED })
  ),
  on(heroSearchActions.searchHeroesFail, state => ({ ...state, ...RESET })),
  on(heroSearchActions.selectHero, state => ({ ...state, ...RESET }))
);

export function heroSearchReducer(state: HeroesState | undefined, action: Action): HeroesState {
  return reducer(state, action);
}
