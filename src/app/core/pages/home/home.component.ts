import { Component, OnInit } from '@angular/core';
import { HomeListMovie } from 'src/app/interfaces/home-list-movie.interface';

// Services
import { GetMoviesTmdbService } from 'src/app/services/get-movies-tmdb.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public movieList!: Promise<Array<HomeListMovie>>;
  constructor(private getMoviesTmdbService: GetMoviesTmdbService) {}

  ngOnInit(): void {
    this.movieList = this.getMoviesTmdbService.getMovieList();
  }
}
