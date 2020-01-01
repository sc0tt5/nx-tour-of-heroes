import { transition, trigger, useAnimation } from '@angular/animations';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routerTransitionPageLoad } from '@nx-demo/shared/animations';

@Component({
  selector: 'nx-demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [trigger('pageLoad', [transition('* => *', useAnimation(routerTransitionPageLoad))])]
})
export class AppComponent {
  // pass router state to routerTransition
  getState(outlet: RouterOutlet) {
    return outlet.activatedRouteData.state;
  }
}
