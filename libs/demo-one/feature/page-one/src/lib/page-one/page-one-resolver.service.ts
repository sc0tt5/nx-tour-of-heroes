import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Page } from '@nx-demo/shared/models';
import { Observable, of } from 'rxjs';
import { PageFacade } from './+state/page-one.facade';

@Injectable()
export class PageResolverService implements Resolve<Page> {
  constructor(private facade: PageFacade) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    this.facade.loadPage();
    return of(true);
  }
}
