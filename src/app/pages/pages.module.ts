import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { MusicModule } from "./music/music.module";
import { MoviesModule } from "./movies/movies.module";
import { PagesComponent } from './pages.component';


@NgModule({
  declarations: [
    PagesComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MoviesModule,
    MusicModule
  ]
})
export class PagesModule { }
