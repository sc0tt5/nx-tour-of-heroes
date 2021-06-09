import { ChangeDetectionStrategy, Component } from '@angular/core';

import { NAV } from '../heroes-nav/heroes-nav.constants';

@Component({
  selector: 'shrd-ui-toh-header',
  templateUrl: './heroes-header.component.html',
  styleUrls: ['./heroes-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroesHeaderComponent {
  href: string = NAV.HERO_SEARCH.href;
}
