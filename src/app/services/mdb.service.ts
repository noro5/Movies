import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../models/movie';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { movieWebApiConfig } from '../../config';

@Injectable({ providedIn: 'root' })
export class MdbService {
  constructor(private http: HttpClient) { }

  fetchMostPopularMoviesFromThisYear(): Observable<Movie[]> {
    // tslint:disable-next-line: max-line-length
    const link = `${movieWebApiConfig.url}/discover/movie?api_key=${movieWebApiConfig.token}&sort_by=popularity.desc&year=${new Date().getFullYear()}`;
    return this.http.get<any>(link).pipe(
      map(response => response.results.map(res => new Movie(res)))
    );
  }

  searchForMovie(description: string) {
    // tslint:disable-next-line: max-line-length
    const link = `${movieWebApiConfig.url}/search/movie?api_key=${movieWebApiConfig.token}&language=en-US&query=${description}&page=1&include_adult=false`;
    return this.http.get<any>(link).pipe(
      map(response => response.results.map(res => new Movie(res)))
    );
  }
}
