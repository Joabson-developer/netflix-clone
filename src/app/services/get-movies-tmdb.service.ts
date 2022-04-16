import { Injectable } from '@angular/core';

// Enums
import { GENERS_ENUM } from '../enums/movie-geners.enum';

// Interfaces
import { HomeListMovie } from '../interfaces/home-list-movie.interface';

@Injectable({
  providedIn: 'root',
})
export class GetMoviesTmdbService {
  private API_KEY: string = 'e02806d05ae222bb32087f5de0e42609';
  private API_BASE: string = 'https://api.themoviedb.org/3';
  private LOCALE: string = 'pt-BR';

  constructor() {}

  get getLocale(): string {
    return this.LOCALE;
  }

  get getApiKey(): string {
    return this.API_KEY;
  }

  public async basicFetch(endPoint: string): Promise<any> {
    const req = await fetch(`${this.API_BASE}${endPoint}`);
    const json = await req.json();
    return json;
  }

  public async getMovieInfo(movieId: string, type: string): Promise<any> {
    let info = {};

    if (movieId) {
      switch (type) {
        case 'movie':
          info = await this.basicFetch(
            `/movie/${movieId}?language=${this.getLocale}&api_key=${this.getApiKey}`
          );
          break;

        case 'tv':
          info = await this.basicFetch(
            `/tv/${movieId}?language=${this.getLocale}&api_key=${this.getApiKey}`
          );
          break;

        default:
          break;
      }
    }

    return info;
  }

  public async getMovieList(): Promise<Array<HomeListMovie>> {
    return [
      {
        slug: 'originals',
        title: 'Originais do Netflix',
        items: await this.basicFetch(
          `/discover/tv?with_network=213&language=${this.getLocale}&api_key=${this.getApiKey}`
        ),
      },
      {
        slug: 'trending',
        title: 'Recomendados para Você',
        items: await this.basicFetch(
          `/trending/all/week?language=${this.getLocale}&api_key=${this.getApiKey}`
        ),
      },
      {
        slug: 'toprated',
        title: 'Em Alta',
        items: await this.basicFetch(
          `/movie/top_rated?language=${this.getLocale}&api_key=${this.getApiKey}`
        ),
      },
      {
        slug: 'action',
        title: 'Ação',
        items: await this.basicFetch(
          `/discover/movie?with_genres=${GENERS_ENUM.action}&language=${this.getLocale}&api_key=${this.getApiKey}`
        ),
      },
      {
        slug: 'comedy',
        title: 'Comédia',
        items: await this.basicFetch(
          `/discover/movie?with_genres=${GENERS_ENUM.comedy}&language=${this.getLocale}&api_key=${this.getApiKey}`
        ),
      },
      {
        slug: 'horror',
        title: 'Terror',
        items: await this.basicFetch(
          `/discover/movie?with_genres=${GENERS_ENUM.horror}&language=${this.getLocale}&api_key=${this.getApiKey}`
        ),
      },
      {
        slug: 'romance',
        title: 'Romance',
        items: await this.basicFetch(
          `/discover/movie?with_genres=${GENERS_ENUM.romance}&language=${this.getLocale}&api_key=${this.getApiKey}`
        ),
      },
      {
        slug: 'documentary',
        title: 'Documentários',
        items: await this.basicFetch(
          `/discover/movie?with_genres=${GENERS_ENUM.documentary}&language=${this.getLocale}&api_key=${this.getApiKey}`
        ),
      },
    ];
  }
}
