import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'header-movie',
  templateUrl: './header-movie.component.html',
  styleUrls: ['./header-movie.component.scss'],
})
export class HeaderMovieComponent implements OnInit {
  public setBackgroundHeader: string = '';
  constructor() {}

  ngOnInit(): void {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    const verticalOffset =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    this.setBackgroundHeader =
      verticalOffset >= 15 ? 'header-movie--scrolled' : '';
  }
}
