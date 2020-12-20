import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import { Hero } from '@nx-toh/shared/models';

export const heroesFeatureKey = 'heroes';

export interface HeroesState extends EntityState<Hero> {
  searchTerm: string | null;
  selectedHeroId: number | null;
  loaded: boolean;
  loading: boolean;
}

export const adapter: EntityAdapter<Hero> = createEntityAdapter<Hero>();

export const heroesInitialState: HeroesState = adapter.getInitialState({
  searchTerm: null,
  selectedHeroId: null,
  loaded: false,
  loading: false
});
