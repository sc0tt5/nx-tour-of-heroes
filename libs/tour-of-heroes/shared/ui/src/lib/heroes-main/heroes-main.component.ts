import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'shrd-ui-toh-main',
  templateUrl: './heroes-main.component.html',
  styleUrls: ['./heroes-main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroesMainComponent {}
