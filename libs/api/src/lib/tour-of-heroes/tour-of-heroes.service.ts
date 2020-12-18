import { HttpService, Injectable, UseFilters } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Hero } from '@nx-toh/shared/models';

import { HttpErrorFilter } from '../http-error/http-error.filter';

@Injectable()
@UseFilters(new HttpErrorFilter())
export class TourOfHeroesService {
  private BASE_URL = 'http://localhost:8800/'; // json-server db for demo purposes only

  constructor(private http: HttpService) {}

  create(hero: Hero): Observable<Hero> {
    return this.http.post(`${this.BASE_URL}heroes`, hero).pipe(map(response => response.data));
  }

  findAll(): Observable<Hero[]> {
    return this.http.get(`${this.BASE_URL}heroes`).pipe(map(response => response.data));
  }

  findOne(id: number): Observable<Hero> {
    return this.http.get(`${this.BASE_URL}heroes/${id}`).pipe(map(response => response.data));
  }

  update(id: number, hero: Hero): Observable<Hero> {
    return this.http.put(`${this.BASE_URL}heroes/${id}`, hero).pipe(map(response => response.data));
  }

  remove(id: number): Observable<number> {
    return this.http.delete(`${this.BASE_URL}heroes/${id}`).pipe(map(() => id));
  }
}
