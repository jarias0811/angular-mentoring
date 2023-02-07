import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {StarWarsResponse} from "../../../shared/models/star-wars-people.model";

@Injectable()
export class StarWarsService {
  private BASE_URL = 'https://swapi.dev/api/';
  private PEOPLE_PATH = 'people/'

  getBaseUrl(){
    return this.BASE_URL;
  }

  constructor(
    private http: HttpClient
  ) { }

  getPeople(): Observable<StarWarsResponse>{
    return this.http
      .get(`${this.BASE_URL}${this.PEOPLE_PATH}`)
      .pipe(
        map(res => <StarWarsResponse>res)
      )
  }
}
