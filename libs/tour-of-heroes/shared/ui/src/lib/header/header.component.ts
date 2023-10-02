import { ChangeDetectionStrategy, Component } from '@angular/core';

import { NavComponent } from '../nav/nav.component';
import { NAV } from '../nav/nav.constants';

@Component({
  standalone: true,
  imports: [NavComponent],
  selector: 'shrd-ui-toh-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  href: string = NAV.HERO_SEARCH.href;
}
