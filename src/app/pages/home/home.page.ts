import { Component, ViewChild } from '@angular/core';
import { MdbService } from '../../services/mdb.service';
import { Observable } from 'rxjs/internal/Observable';
import { Movie } from '../../models/movie';
import { IonContent } from '@ionic/angular';
import { FavouriteMoviesService } from 'src/app/services/favourite-movies.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild(IonContent, { static: true }) content: IonContent;
  movies: Observable<Movie[]>;
  constructor(private movieDb: MdbService, private favMoviesService: FavouriteMoviesService) {
    this.loadMovies();
  }

  loadMovies() {
    this.movies = this.movieDb.fetchMostPopularMoviesFromThisYear();
  }

  searchForMovie(event) {
    if (event.detail.value) {
      this.movies = this.movieDb.searchForMovie(event.detail.value);
    } else {
      this.loadMovies();
    }

    this.scrollToTop();
  }

  scrollToTop() {
    this.content.scrollToTop();
  }

  addToFaviurite(movie: Movie) {
    if (!movie.isFavourite) {
      this.favMoviesService.addToFavourite(movie);
    } else {
      this.favMoviesService.removeFromFavourite(movie);
    }

    movie.isFavourite = !movie.isFavourite;
  }
}
