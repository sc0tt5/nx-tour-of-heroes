import { createSelector } from '@ngrx/store';

import { heroesSelectors } from '../heroes.selectors';
import { HeroesState } from '../heroes.state';

// projectors
const selectedHero = (state: HeroesState) => state.entities[state.selectedHeroId];

// selectors
const selectSelectedHero = createSelector(heroesSelectors.selectHeroesState, selectedHero);

export const heroDetailSelectors = { selectSelectedHero };
