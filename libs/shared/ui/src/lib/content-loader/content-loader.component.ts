// prettier-ignore
import { NgIf, NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, TemplateRef, ViewEncapsulation } from '@angular/core';

@Component({
  standalone: true,
  imports: [NgIf, NgTemplateOutlet],
  selector: 'shrd-ui-content-loader',
  templateUrl: './content-loader.component.html',
  styleUrls: ['./content-loader.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentLoaderComponent<T> {
  @Input() pageLoaded = false;
  @Input() templateRef: TemplateRef<T>;
}
