import { Component, OnInit } from '@angular/core';
import { FavouriteMoviesService } from 'src/app/services/favourite-movies.service';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.page.html',
  styleUrls: ['./favourites.page.scss'],
})
export class FavouritesPage implements OnInit {

  constructor(private favMoviesService: FavouriteMoviesService) { }

  favouriteMovies: Set<Movie>;
  ngOnInit() {
    this.favouriteMovies = this.favMoviesService.favouriteMovies;
  }

}
