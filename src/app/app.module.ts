import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './core/pages/home/home.component';
import { MovieRowComponent } from './shared/movie-row/movie-row.component';
import { FeaturedMovieComponent } from './shared/featured-movie/featured-movie.component';

// Directives
import { BackgroundImageDirective } from './directive/background-image.directive';

// Angular Material
import { MatIconModule } from '@angular/material/icon';
import { GetFullYearPipe } from './pipes/date/get-full-year.pipe';
import { MaxLengthPipe } from './pipes/string/max-length.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieRowComponent,
    FeaturedMovieComponent,
    BackgroundImageDirective,
    GetFullYearPipe,
    MaxLengthPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
