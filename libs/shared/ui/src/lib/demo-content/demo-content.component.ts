import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { fadeInDownAnimation } from '@nx-demo/shared/animations';

@Component({
  selector: 'nx-demo-demo-content',
  templateUrl: './demo-content.component.html',
  styleUrls: ['./demo-content.component.scss'],
  animations: [fadeInDownAnimation()],
  encapsulation: ViewEncapsulation.None, // required to style content in ng-content
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoContentComponent {
  @Input() pageLoaded = false;
}
