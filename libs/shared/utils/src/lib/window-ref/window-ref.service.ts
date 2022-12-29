import { Injectable } from '@angular/core';

import { GoogleAnalyticsEvent } from '@nx-toh/shared/models';

declare global {
  interface Window {
    dataLayer: GoogleAnalyticsEvent[];
  }
}

function _window(): Window {
  window.dataLayer = window.dataLayer || [];
  return window;
}

@Injectable({
  providedIn: 'root'
})
export class WindowRefService {
  get nativeWindow(): Window {
    return _window();
  }
}
