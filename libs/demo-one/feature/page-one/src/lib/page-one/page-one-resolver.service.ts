import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Page } from '@nx-demo/shared/models';
import { Observable, of } from 'rxjs';
import { PageFacade } from './+state/page-one.facade';

@Injectable()
export class PageResolverService implements Resolve<Page> {
  constructor(private facade: PageFacade) {}

  resolve(): Observable<any> | Promise<any> | any {
    this.facade.loadPage('page-one');
    return of(true);
  }
}
