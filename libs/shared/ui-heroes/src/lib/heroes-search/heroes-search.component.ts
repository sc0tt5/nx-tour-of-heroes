import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'shrd-ui-toh-heroes-search',
  templateUrl: './heroes-search.component.html',
  styleUrls: ['./heroes-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroesSearchComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
