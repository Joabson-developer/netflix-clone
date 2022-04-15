import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './core/pages/home/home.component';
import { MovieRowComponent } from './shared/movie-row/movie-row.component';
import { FeaturedMovieComponent } from './shared/featured-movie/featured-movie.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, MovieRowComponent, FeaturedMovieComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
