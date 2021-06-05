import { MovieStoreService } from './../../services/movie-store.service';
import { IMoviePopularItem } from './../../models/IMoviePopularItem';
import { MovieService } from './../../services/movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  votes: '';

  url_image: string = 'https://image.tmdb.org/t/p/w500';

  popularItem: IMoviePopularItem[] = [];

  constructor(private movieService: MovieService, private movieStore: MovieStoreService) { }

  ngOnInit(): void {
    this.getPopularMovies();
    this.getStore();
  }

  getPopularMovies(): void {
    this.movieService.getPopularMovie()
      .subscribe(m => this.popularItem = m.results );
  }

  onSelect(option){
    this.movieStore.addFilter(option)
    this.popularItem.sort((a, b) => a.vote_count - b.vote_count);
  }

  getStore(){
    this.movieStore.filter$.subscribe(val => this.votes = val[0]);
  }

}
