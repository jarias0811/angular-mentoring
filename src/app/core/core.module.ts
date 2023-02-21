import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import {StarWarsService} from "./services/star-wars/star-wars.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {BrowserModule} from "@angular/platform-browser";
import {JwtInterceptor} from "./interceptors/jwt-interceptor";


@NgModule({
  declarations: [],
  providers:[
    StarWarsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    HttpClientModule,
  ]
})
export class CoreModule { }
