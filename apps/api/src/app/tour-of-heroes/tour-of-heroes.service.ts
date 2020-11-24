import { HttpService, Injectable, UseFilters } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Hero } from '@nx-demo/shared/models';

import { HttpErrorFilter } from '../http-error/http-error.filter';

@Injectable()
@UseFilters(new HttpErrorFilter())
export class TourOfHeroesService {
  private BASE_URL = 'http://localhost:8800/'; // json-server db for demo purposes only

  constructor(private http: HttpService) {}

  findAll(): Observable<Hero[]> {
    return this.http.get(`${this.BASE_URL}heroes`).pipe(map(response => response.data));
  }

  findOne(id: number): Observable<Hero> {
    return this.http.get(`${this.BASE_URL}heroes/${id}`).pipe(map(response => response.data));
  }
}
