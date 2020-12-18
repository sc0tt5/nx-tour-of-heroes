// prettier-ignore
import { ChangeDetectionStrategy, Component, Input, TemplateRef, ViewEncapsulation } from '@angular/core';

import { fadeInDownAnimation } from '@nx-toh/shared/animations';

@Component({
  selector: 'shrd-ui-content-loader',
  templateUrl: './content-loader.component.html',
  styleUrls: ['./content-loader.component.scss'],
  animations: [fadeInDownAnimation()],
  encapsulation: ViewEncapsulation.None, // required to style content in ng-content
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentLoaderComponent<T> {
  @Input() pageLoaded = false;
  @Input() templateRef: TemplateRef<T>;
}
