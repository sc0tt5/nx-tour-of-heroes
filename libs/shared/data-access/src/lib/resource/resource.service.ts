import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Resource } from '@nx-demo/shared/models';
import { Observable, of, throwError } from 'rxjs';
import { catchError, delay, map } from 'rxjs/operators';

export class ResourceService<T extends Resource> {
  constructor(private http: HttpClient, private endpoint: string) {}

  /**
   * Creates a new page.
   * @param {T} item
   */
  create(item: T): Observable<T> {
    return this.http.post<T>(this.endpoint, item).pipe(
      map(data => data as T),
      catchError(this.handleError)
    );
  }

  /**
   * Updates an existing page.
   * @param {T} item
   */
  update(item: T): Observable<T> {
    return this.http.put<T>(`${this.endpoint}/${item.param}`, item).pipe(
      map(data => data as T),
      catchError(this.handleError)
    );
  }

  /**
   * Fetches an existing page
   * @param {any} params
   */
  read(params: any): Observable<T> {
    return this.http.get(this.endpoint, { params }).pipe(
      delay(1000), // for demonstration purposes only, simulate slower server response
      map((data: any) => data as T),
      catchError(this.handleError)
    );
  }

  /**
   * Fetches all pages.
   */
  list(): Observable<T[]> {
    return this.http.get(this.endpoint).pipe(
      map((data: any) => data as T[]),
      catchError(this.handleError)
    );
  }

  /**
   * Deletes a page.
   * @param {string} param
   */
  delete(param: string) {
    return this.http.delete(`${this.endpoint}/${param}`).pipe(catchError(this.handleError));
  }

  /**
   * Error handler.
   * @param {HttpErrorResponse} error
   */
  private handleError(error: HttpErrorResponse): Observable<never> {
    return throwError(error);
  }
}
