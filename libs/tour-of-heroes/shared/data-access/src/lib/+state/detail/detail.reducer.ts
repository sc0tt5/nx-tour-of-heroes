import { on } from '@ngrx/store';

import { adapter, HeroesReducerTypes, LOADED, LOADING, RESET } from '../heroes.state';

import { heroDetailActions } from './detail.actions';

export const detailReducerOns: HeroesReducerTypes[] = [
  on(heroDetailActions.createHero, state => ({ ...state, ...LOADING })),
  on(heroDetailActions.createHeroSuccess, (state, { hero }) => adapter.updateOne(hero, { ...state, ...LOADED })),
  on(heroDetailActions.createHeroFail, state => ({ ...state, ...RESET })),
  on(heroDetailActions.loadHero, state => ({ ...state, ...LOADING })),
  on(heroDetailActions.loadHeroSuccess, (state, payload) => adapter.setOne(payload.hero, { ...state, ...LOADED })),
  on(heroDetailActions.loadHeroFail, state => ({ ...state, ...RESET })),
  on(heroDetailActions.selectHeroId, (state, { id }) => ({ ...state, selectedHeroId: id })),
  on(heroDetailActions.resetSelectedHeroId, state => ({ ...state, ...{ selectedHeroId: null } })),
  on(heroDetailActions.updateHero, state => ({ ...state, ...LOADING })),
  on(heroDetailActions.updateHeroSuccess, (state, { hero }) => adapter.updateOne(hero, { ...state, ...LOADED })),
  on(heroDetailActions.updateHeroFail, state => ({ ...state, ...RESET }))
];
