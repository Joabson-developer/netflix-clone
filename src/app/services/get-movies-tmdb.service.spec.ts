import { TestBed } from '@angular/core/testing';

import { GetMoviesTmdbService } from './get-movies-tmdb.service';

describe('GetMoviesTmdbService', () => {
  let service: GetMoviesTmdbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetMoviesTmdbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
