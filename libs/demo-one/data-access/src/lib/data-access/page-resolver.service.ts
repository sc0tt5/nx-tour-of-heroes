import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { Page } from '@nx-demo/shared/models';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PageService } from './page.service';

@Injectable({
  providedIn: 'root'
})
export class PageResolver implements Resolve<any> {
  constructor(private service: PageService, private router: Router) {}

  // TODO: unit test resolve
  resolve(route: ActivatedRouteSnapshot): Observable<Page> {
    const param = route.data.state;

    return this.service.getPage(param).pipe(
      map(page => {
        if (page) {
          return page;
        }
        // else
        this.router.navigate(param);
        return null;
      })
    );
  }
}
