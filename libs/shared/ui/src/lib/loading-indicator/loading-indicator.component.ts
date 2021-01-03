import { Component, Input, ViewEncapsulation } from '@angular/core';

import { growWidthAnimation } from '@nx-toh/shared/animations';

@Component({
  selector: 'shrd-ui-loading-indicator',
  templateUrl: './loading-indicator.component.html',
  styleUrls: ['./loading-indicator.component.scss'],
  encapsulation: ViewEncapsulation.None, // required to update accordion shared styles
  animations: [growWidthAnimation()]
})
export class LoadingIndicatorComponent {
  @Input() pageLoaded = false;
}
