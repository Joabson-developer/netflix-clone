import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'featured-movie',
  templateUrl: './featured-movie.component.html',
  styleUrls: ['./featured-movie.component.scss'],
})
export class FeaturedMovieComponent implements OnInit {
  @Input() featuredData: any;
  constructor() {}

  ngOnInit(): void {
    console.log(this.featuredData);
  }

  public getFullYear(date: string): number {
    const firstDate = new Date(date);
    return firstDate.getFullYear();
  }
}
