import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { FooterBarComponent } from './footer-bar/footer-bar.component';
import { MovieInfoComponentComponent } from './movie-info-component/movie-info-component.component';
import { SidebarleftComponent } from './sidebarleft/sidebarleft.component';
import { DisplaymoviedetailComponent } from './displaymoviedetail/displaymoviedetail.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    FooterBarComponent,
    MovieInfoComponentComponent,
    SidebarleftComponent,
    DisplaymoviedetailComponent,
  
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
