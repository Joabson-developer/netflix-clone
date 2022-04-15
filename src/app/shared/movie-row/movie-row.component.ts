import { Component, Input, OnInit } from '@angular/core';

// Interfaces
import { HomeListMovie } from 'src/app/interfaces/home-list-movie.interface';

@Component({
  selector: 'movie-row',
  templateUrl: './movie-row.component.html',
  styleUrls: ['./movie-row.component.scss'],
})
export class MovieRowComponent implements OnInit {
  @Input() title: string = '';
  @Input() items!: any;

  constructor() {}

  ngOnInit(): void {
    console.log(this.items);
  }
}
