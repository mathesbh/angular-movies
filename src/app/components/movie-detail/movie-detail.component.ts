import { IMovieDetails } from './../../models/IMovieDetails';
import { MovieService } from './../../services/movie.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  url_image: string = 'https://image.tmdb.org/t/p/w500';

  movieDetail: IMovieDetails;

  constructor(private route: ActivatedRoute, private movieService: MovieService, private location: Location) { }

  ngOnInit(): void {
    this.getMovieDetails();
  }

  getMovieDetails(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.movieService.getMovieDetails(id)
      .subscribe(m => this.movieDetail = m);
  }

}
