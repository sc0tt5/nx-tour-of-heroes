import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Page } from '@nx-demo/shared/models';
import { Observable, of } from 'rxjs';
import { PageOneFacade } from './+state/page-one.facade';

@Injectable()
export class PageOneResolverService implements Resolve<Page> {
  constructor(private facade: PageOneFacade) {}

  resolve(): Observable<any> | Promise<any> | any {
    this.facade.loadPage('page-one');
    return of(true);
  }
}
