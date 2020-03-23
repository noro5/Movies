import { Component, ViewChild } from '@angular/core';
import { MdbService } from '../../services/mdb.service';
import { Observable } from 'rxjs/internal/Observable';
import { Movie } from '../../models/movie';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild(IonContent, { static: true }) content: IonContent;
  movies: Observable<Movie[]>;
  constructor(private movieDb: MdbService) {
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
}
