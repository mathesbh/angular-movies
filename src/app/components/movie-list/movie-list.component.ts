import { IMoviePopularItem } from './../../models/IMoviePopularItem';
import { MovieService } from './../../services/movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  url_image: string = 'https://image.tmdb.org/t/p/w500';

  popularItem: IMoviePopularItem[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getPopularMovies();
  }

  getPopularMovies(): void {
    this.movieService.getPopularMovie()
      .subscribe(m => this.popularItem = m.results );
  }

}
