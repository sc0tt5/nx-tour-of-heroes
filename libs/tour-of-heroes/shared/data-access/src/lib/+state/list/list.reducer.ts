import { on } from '@ngrx/store';

import { adapter, HeroesReducerTypes, LOADED, LOADING, RESET } from '../heroes.state';
import { heroListActions } from './list.actions';

export const listReducerOns: HeroesReducerTypes[] = [
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
];
