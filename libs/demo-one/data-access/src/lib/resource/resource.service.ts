import { HttpClient } from '@angular/common/http';
import { Resource } from '@nx-demo/shared/models';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export class ResourceService<T extends Resource> {
  constructor(private http: HttpClient, private endpoint: string) {}

  /**
   * Creates a new page.
   * @param item
   */
  create(item: T): Observable<T> {
    return this.http.post<T>(this.endpoint, item).pipe(
      map(data => data as T),
      catchError((error: any) => of(error))
    );
  }

  /**
   * Updates an existing page.
   * @param item
   */
  update(item: T): Observable<T> {
    return this.http.put<T>(`${this.endpoint}/${item.param}`, item).pipe(
      map(data => data as T),
      catchError((error: any) => of(error))
    );
  }

  /**
   * Fetches an existing page
   * @param params
   */
  read(params: any): Observable<T> {
    return this.http.get(this.endpoint, { params }).pipe(
      map((data: any) => data as T),
      catchError((error: any) => of(error))
    );
  }

  /**
   * Fetches all pages.
   */
  list(): Observable<T[]> {
    return this.http.get(this.endpoint).pipe(
      map((data: any) => data as T),
      catchError((error: any) => of(error))
    );
  }

  /**
   * Deletes a page.
   * @param param
   */
  delete(param: string) {
    return this.http
      .delete(`${this.endpoint}/${param}`)
      .pipe(catchError((error: any) => of(error)));
  }
}
