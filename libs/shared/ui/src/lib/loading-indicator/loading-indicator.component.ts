import { Component, Input, ViewEncapsulation } from '@angular/core';
import { growWidthAnimation } from '@nx-demo/shared/animations';

@Component({
  selector: 'nx-demo-loading-indicator',
  templateUrl: './loading-indicator.component.html',
  styleUrls: ['./loading-indicator.component.scss'],
  encapsulation: ViewEncapsulation.None, // required to update accordion shared styles
  animations: [growWidthAnimation()]
})
export class LoadingIndicatorComponent {
  @Input() pageLoaded = false;
}
