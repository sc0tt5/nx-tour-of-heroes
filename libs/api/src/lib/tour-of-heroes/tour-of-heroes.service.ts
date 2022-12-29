import { HttpService } from '@nestjs/axios';
import { Injectable, UseFilters } from '@nestjs/common';

import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';

import { Hero } from '@nx-toh/shared/models';

import { HttpErrorFilter } from '../http-error/http-error.filter';

@Injectable()
@UseFilters(new HttpErrorFilter())
export class TourOfHeroesService {
  private BASE_URL = 'http://localhost:8800/'; // json-server db for demo purposes only

  constructor(private http: HttpService) {}

  create(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(`${this.BASE_URL}heroes`, hero).pipe(
      delay(200), // for demonstration purposes only, simulate slower server response
      map(response => response.data)
    );
  }

  findAll(name?: string): Observable<Hero[]> {
    const filter = name ? `?name_like=${name}` : ''; // for demo purposes (json-server)
    return this.http.get<Hero[]>(`${this.BASE_URL}heroes${filter}`).pipe(
      delay(200),
      map(response => response.data)
    );
  }

  findOne(id: number): Observable<Hero> {
    return this.http.get<Hero>(`${this.BASE_URL}heroes/${id}`).pipe(
      delay(200),
      map(response => response.data)
    );
  }

  update(id: number, hero: Hero): Observable<Hero> {
    return this.http.put<Hero>(`${this.BASE_URL}heroes/${id}`, hero).pipe(
      delay(200),
      map(response => response.data)
    );
  }

  remove(id: number): Observable<number> {
    return this.http.delete(`${this.BASE_URL}heroes/${id}`).pipe(
      delay(200),
      map(() => id)
    );
  }
}
