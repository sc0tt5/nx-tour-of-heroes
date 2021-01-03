import { Action, createReducer } from '@ngrx/store';

import { detailReducerOns } from './detail/detail.reducer';
import { heroesInitialState, HeroesState } from './heroes.state';
import { listReducerOns } from './list/list.reducer';
import { searchReducerOns } from './search/search.reducer';

const reducer = createReducer(
  heroesInitialState,
  ...searchReducerOns,
  ...listReducerOns,
  ...detailReducerOns
);

export function heroesReducer(state: HeroesState | undefined, action: Action): HeroesState {
  return reducer(state, action);
}
