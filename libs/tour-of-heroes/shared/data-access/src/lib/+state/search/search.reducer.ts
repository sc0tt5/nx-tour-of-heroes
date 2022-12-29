import { on } from '@ngrx/store';

import { adapter, HeroesReducerTypes, LOADED, LOADING, RESET } from '../heroes.state';

import { heroSearchActions } from './search.actions';

export const searchReducerOns: HeroesReducerTypes[] = [
  on(heroSearchActions.resetSearchTerm, state => ({ ...state, ...{ searchTerm: null } })),
  on(heroSearchActions.searchHeroes, (state, { name }) => ({
    ...state,
    ...LOADING,
    searchTerm: name ? name.toLowerCase() : null
  })),
  on(heroSearchActions.searchHeroesSuccess, (state, { heroes }) => adapter.upsertMany(heroes, { ...state, ...LOADED })),
  on(heroSearchActions.searchHeroesFail, state => ({ ...state, ...RESET })),
  on(heroSearchActions.selectHero, state => ({ ...state, ...RESET }))
];
