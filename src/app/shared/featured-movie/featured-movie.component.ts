import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'featured-movie',
  templateUrl: './featured-movie.component.html',
  styleUrls: ['./featured-movie.component.scss'],
})
export class FeaturedMovieComponent implements OnInit {
  @Input() featuredData: any;
  constructor() {}

  ngOnInit(): void {}
}
