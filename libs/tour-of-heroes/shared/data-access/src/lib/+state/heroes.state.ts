import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { ActionCreator, ReducerTypes } from '@ngrx/store';

import { Hero } from '@nx-toh/shared/models';

export const heroesFeatureKey = 'heroes';

export interface HeroesState extends EntityState<Hero> {
  searchTerm: string | null;
  selectedHeroId: number | null;
  loaded: boolean;
  loading: boolean;
}

export interface HeroesReducerTypes extends ReducerTypes<HeroesState, ActionCreator[]> {}

function sortByRating(a: Hero, b: Hero) {
  return a.rating === b.rating ? 0 : a.rating > b.rating ? 1 : -1;
}

export const adapter: EntityAdapter<Hero> = createEntityAdapter<Hero>({
  sortComparer: sortByRating
});

export const heroesInitialState: HeroesState = adapter.getInitialState({
  searchTerm: null,
  selectedHeroId: null,
  loaded: false,
  loading: false
});

export const LOADING = { loading: true, loaded: false };
export const LOADED = { loading: false, loaded: true };
export const RESET = { loading: false, loaded: false };
