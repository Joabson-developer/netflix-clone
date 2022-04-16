import { Component, Input, OnInit } from '@angular/core';

// Interfaces
import { HomeListMovie } from 'src/app/interfaces/home-list-movie.interface';

@Component({
  selector: 'movie-row',
  templateUrl: './movie-row.component.html',
  styleUrls: ['./movie-row.component.scss'],
})
export class MovieRowComponent implements OnInit {
  public scrollX: number = -400;

  @Input() title: string = '';
  @Input() items!: any;

  constructor() {}

  ngOnInit(): void {}

  public handleLeftArrow(): void {
    let x = this.scrollX + Math.round(window.innerWidth / 2);

    if (x > 0) {
      x = 0;
    }

    this.scrollX = x;
  }

  public handleRightArrow(listWidth: number): void {
    let x = this.scrollX - Math.round(window.innerWidth / 2);

    if (window.innerWidth - listWidth > x) {
      x = window.innerWidth - listWidth - 60;
    }

    this.scrollX = x;
  }
}
