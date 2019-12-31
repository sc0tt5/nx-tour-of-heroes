import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Page } from '@nx-demo/shared/models';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  private api = '/api/pages'; // URL to web api

  constructor(private http: HttpClient) {}

  // TODO: unit test getPage
  getPage(param: string): Observable<Page> {
    return this.http.get<Page[]>(this.api).pipe(
      map(pages => pages.find(page => page.param === param)),
      catchError((error: any) => of(error))
    );
  }
}
