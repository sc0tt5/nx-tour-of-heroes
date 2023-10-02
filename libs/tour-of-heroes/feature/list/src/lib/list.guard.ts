import { inject } from '@angular/core';

import { filter, take } from 'rxjs';

import { HeroListFacade } from '@nx-toh/tour-of-heroes/shared/data-access';

export const heroListGuard = () => {
  const facade = inject(HeroListFacade);
  facade.loadHeroes();
  return facade.heroesLoaded$.pipe(
    filter(loaded => loaded),
    take(1)
  );
};
