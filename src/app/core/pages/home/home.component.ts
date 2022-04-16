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
  public featuredData!: Promise<any>;
  constructor(private getMoviesTmdbService: GetMoviesTmdbService) {}

  ngOnInit(): void {
    this.movieList = this.getMoviesTmdbService.getMovieList();

    let originals;

    this.movieList.then((res) => {
      originals = res.filter((i) => i.slug === 'originals');
      let randomChosen = Math.floor(
        Math.random() * (originals[0].items.results.length - 1)
      );
      let chosen = originals[0].items.results[randomChosen];

      this.featuredData = this.getMoviesTmdbService.getMovieInfo(
        chosen.id,
        'tv'
      );

      console.log(this.featuredData);
    });
  }
}
