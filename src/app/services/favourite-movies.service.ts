import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class FavouriteMoviesService {

  favouriteMovies: Set<Movie> = new Set<Movie>();
  constructor() { }

  addToFavourite(movie: Movie) {
    this.favouriteMovies.add(movie);
  }

  removeFromFavourite(movie: Movie) {
    this.favouriteMovies.delete(movie);
  }

  hasMovie(movie: Movie) {
    return this.favouriteMovies.has(movie);
  }
}
