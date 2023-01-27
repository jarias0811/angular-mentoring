import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import {SharedModule} from "../../shared/shared.module";
import { DirectorComponent } from './components/director/director.component';


@NgModule({
  declarations: [
    DirectorComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    SharedModule
  ]
})
export class MoviesModule { }
