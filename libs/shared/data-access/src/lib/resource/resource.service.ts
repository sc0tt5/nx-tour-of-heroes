import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Inject, PLATFORM_ID } from '@angular/core';
import { makeStateKey, StateKey, TransferState } from '@angular/platform-browser';
import { Observable, of, throwError } from 'rxjs';
import { catchError, delay, map } from 'rxjs/operators';

import { Resource } from '@nx-toh/shared/models';

export class ResourceService<T extends Resource> {
  public itemKey: StateKey<T>;
  public itemsKey: StateKey<T[]>;
  public isBrowser: boolean;
  public isServer: boolean;

  constructor(
    @Inject(PLATFORM_ID) protected platformId: Object,
    protected http: HttpClient,
    protected transferState: TransferState,
    private endpoint: string,
    private itemKeyName?: string,
    private itemsKeyName?: string
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
    this.isServer = isPlatformServer(platformId);
    this.itemKey = makeStateKey<T>(itemKeyName || '');
    this.itemsKey = makeStateKey<T[]>(itemsKeyName || '');
  }

  /**
   * Creates a new item.
   * @param {T} item
   */
  create(item: T): Observable<T> {
    return this.http.post<T>(this.endpoint, item).pipe(
      map(data => data as T),
      catchError(this.handleError)
    );
  }

  /**
   * Updates an existing item.
   * @param {T} item
   */
  update(item: T): Observable<T> {
    return this.http.put<T>(`${this.endpoint}/${item.param || item.id}`, item).pipe(
      delay(1000), // for demonstration purposes only, simulate slower server response
      map(data => data as T),
      catchError(this.handleError)
    );
  }

  /**
   * Fetches an existing item.
   * @param {any} params
   */
  read(params?: any, path?: string): Observable<T | undefined> {
    const transferStateHasKey = this.transferState.hasKey<T>(this.itemKey);
    const getFromApi = this.isServer || (this.isBrowser && !transferStateHasKey);
    const getFromTransferState = this.isBrowser && transferStateHasKey;
    const parameters = params ? { params } : {};

    if (getFromApi) {
      return this.http.get(`${this.endpoint}${path ? '/' + path : ''}`, parameters).pipe(
        delay(1000), // for demonstration purposes only, simulate slower server response
        map((data: any) => {
          if (this.isServer) {
            this.transferState.set<T>(this.itemKey, data);
          }
          return data as T;
        }),
        catchError(this.handleError)
      );
    } else if (getFromTransferState) {
      const item = this.transferState.get<T | undefined>(this.itemKey, undefined);
      this.transferState.remove<T>(this.itemKey);
      return of(item);
    }
    return of();
  }

  /**
   * Fetches all items.
   */
  list(params?: any): Observable<T[]> {
    const transferStateHasKey = this.transferState.hasKey<T>(this.itemKey);
    const getFromApi = this.isServer || (this.isBrowser && !transferStateHasKey);
    const getFromTransferState = this.isBrowser && transferStateHasKey;
    const parameters = params ? { params } : {};

    if (getFromApi) {
      return this.http.get(this.endpoint, parameters).pipe(
        map((data: any) => {
          if (this.isServer) {
            this.transferState.set<T[]>(this.itemsKey, data);
          }
          return data as T[];
        }),
        catchError(this.handleError)
      );
    } else if (getFromTransferState) {
      const items = this.transferState.get<T[]>(this.itemsKey, []);
      this.transferState.remove<T>(this.itemsKey);
      return of(items);
    }
    return of();
  }

  /**
   * Deletes an item.
   * @param {string} param
   */
  delete(id: string | number): Observable<any> {
    return this.http.delete(`${this.endpoint}/${id}`).pipe(catchError(this.handleError));
  }

  /**
   * Error handler.
   * @param {HttpErrorResponse} error
   */
  private handleError(error: HttpErrorResponse): Observable<never> {
    console.log('error from the resource service', error);
    return throwError(error); // NGXLogger will automatically trigger here
  }
}
