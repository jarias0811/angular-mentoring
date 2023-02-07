import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import {StarWarsService} from "./services/star-wars/star-wars.service";
import {HttpClientModule} from "@angular/common/http";
import {BrowserModule} from "@angular/platform-browser";


@NgModule({
  declarations: [],
  providers:[
    StarWarsService
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    HttpClientModule,
  ]
})
export class CoreModule { }
