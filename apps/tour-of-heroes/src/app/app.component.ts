import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';

import { WindowRefService } from '@nx-demo/shared/utils';

@Component({
  selector: 'nx-demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tour of Heroes';

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private windowRef: WindowRefService
  ) {}

  onActivate() {
    if (isPlatformBrowser(this.platformId)) {
      this.windowRef.nativeWindow.scroll(0, 0); // start at the top of the page when navigating
    }
  }
}
