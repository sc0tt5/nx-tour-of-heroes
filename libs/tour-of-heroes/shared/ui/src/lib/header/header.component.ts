import { ChangeDetectionStrategy, Component } from '@angular/core';

import { NAV } from '../nav/nav.constants';

@Component({
  selector: 'shrd-ui-toh-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  href: string = NAV.HERO_SEARCH.href;
}
