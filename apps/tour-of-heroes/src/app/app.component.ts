import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';

import { WindowRefService } from '@nx-toh/shared/utils';

@Component({
  selector: 'toh-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(
    @Inject(PLATFORM_ID) private platformId: unknown,
    private windowRef: WindowRefService
  ) {}

  onActivate() {
    if (isPlatformBrowser(this.platformId)) {
      this.windowRef.nativeWindow.scroll(0, 0); // start at the top of the page when navigating
    }
  }
}
