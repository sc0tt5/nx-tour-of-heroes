import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';

import { PageOne } from '@nx-demo/shared/models';

import { PageOneFacade } from './+state/page-one.facade';

@Injectable()
export class PageOneResolverService implements Resolve<PageOne> {
  constructor(private facade: PageOneFacade) {}

  resolve(): Observable<any> | Promise<any> | any {
    this.facade.loadPage('page-one');
    return of(true);
  }
}
