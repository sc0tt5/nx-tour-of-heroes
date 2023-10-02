import { inject } from '@angular/core';

import { filter, take } from 'rxjs';

import { RouterFacade } from '@nx-toh/shared/utils';
import { HeroDetailFacade } from '@nx-toh/tour-of-heroes/shared/data-access';

export const heroDetailGuard = () => {
  const facade = inject(HeroDetailFacade);
  const router = inject(RouterFacade);

  router.params$.pipe(take(1)).subscribe(({ id }) => facade.selectHeroId(id as unknown as number));

  return facade.heroLoaded$.pipe(
    filter(loaded => loaded),
    take(1)
  );
};
