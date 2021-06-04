import { Component, OnInit } from '@angular/core';
import { IMoviePopularItem } from 'src/app/models/IMoviePopularItem';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {

  url_image: string = 'https://image.tmdb.org/t/p/w500';

  popularItems: IMoviePopularItem[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getPopularMovies();
  }

  getPopularMovies(): void {
    this.movieService.getPopularMovie()
      .subscribe(m => this.popularItems = m.results );
  }

}
