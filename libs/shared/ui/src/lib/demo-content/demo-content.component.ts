import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'nx-demo-demo-content',
  templateUrl: './demo-content.component.html',
  styleUrls: ['./demo-content.component.scss'],
  encapsulation: ViewEncapsulation.None, // required to content in ng-content
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoContentComponent {}
