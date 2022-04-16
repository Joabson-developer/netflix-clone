import { NgModule } from '@angular/core';

// Modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './core/pages/home/home.component';
import { MovieRowComponent } from './shared/movie-row/movie-row.component';
import { FeaturedMovieComponent } from './shared/featured-movie/featured-movie.component';
import { HeaderMovieComponent } from './shared/header-movie/header-movie.component';
import { FooterAppComponent } from './shared/footer-app/footer-app.component';

// Directives
import { BackgroundImageDirective } from './directive/background-image/background-image.directive';
import { ColorDirective } from './directive/color/color.directive';

// Pipes
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
    HeaderMovieComponent,
    FooterAppComponent,
    ColorDirective,
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
