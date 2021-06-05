import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {

  url_image: string = 'https://image.tmdb.org/t/p/w500';

  @Input() id: Number;
  @Input() title: String;
  @Input() poster_path: String;

  constructor() { }

  ngOnInit(): void {
  }
}
