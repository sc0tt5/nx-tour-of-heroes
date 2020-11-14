import { HttpService, Injectable, UseFilters } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { HttpErrorFilter } from '../http-error/http-error.filter';

@Injectable()
@UseFilters(new HttpErrorFilter())
export class TourOfHeroesService {
  private BASE_URL = 'http://localhost:8800/';

  constructor(private http: HttpService) {}

  findAll(): Observable<any[]> {
    return this.http.get(`${this.BASE_URL}heroes`).pipe(map(response => response.data));
  }
}
