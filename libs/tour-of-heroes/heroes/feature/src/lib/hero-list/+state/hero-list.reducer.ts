import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

import { Hero } from '@nx-toh/shared/models';

import { heroListActions } from './hero-list.actions';

export const heroListFeatureKey = 'hero-list';

export interface HeroListState extends EntityState<Hero> {
  loaded: boolean;
  loading: boolean;
}

function sortByRating(a: Hero, b: Hero) {
  return a.rating === b.rating ? 0 : a.rating > b.rating ? 1 : -1;
}

const adapter: EntityAdapter<Hero> = createEntityAdapter<Hero>({ sortComparer: sortByRating });

export const heroListInitialState: HeroListState = adapter.getInitialState({
  loaded: false,
  loading: false
});

// helpers ?
const LOADING = { loading: true, loaded: false };
const LOADED = { loading: false, loaded: true };
const RESET = { loading: false, loaded: false };

const reducer = createReducer(
  heroListInitialState,
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

export function heroListReducer(state: HeroListState | undefined, action: Action): HeroListState {
  return reducer(state, action);
}
