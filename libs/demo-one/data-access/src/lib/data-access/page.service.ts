import { HttpClient, HttpParams } from '@angular/common/http';
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
  getPage(pageName: string): Observable<Page> {
    let params = new HttpParams();
    params = params.append('page', pageName);

    return this.http.get<Page>(this.api, { params }).pipe(
      map(page => page),
      catchError((error: any) => of(error))
    );
  }
}
