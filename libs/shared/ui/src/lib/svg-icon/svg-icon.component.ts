import { NgStyle } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  standalone: true,
  imports: [NgStyle],
  selector: 'shrd-ui-svg-icon',
  templateUrl: './svg-icon.component.html',
  styleUrls: ['./svg-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconComponent implements OnInit {
  @Input() iconName = 'close';
  @Input() iconSize = 24;

  iconSrc: string;

  ngOnInit(): void {
    this.getIcon();
  }

  private getIcon(): void {
    const iconPath = `/assets/icons/32/${this.iconName}.svg`;
    this.iconSrc = iconPath;
  }
}
