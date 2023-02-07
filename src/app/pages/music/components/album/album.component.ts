import {Component, OnDestroy, OnInit} from '@angular/core';
import {StarWarsService} from "../../../../core/services/star-wars/star-wars.service";
import {StarWarsPeople} from "../../../../shared/models/star-wars-people.model";
import {first, Subscription} from "rxjs";

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit, OnDestroy {
  people: Array<StarWarsPeople> = [];
  peopleSubscription: Subscription | undefined;

  constructor(private starWarsService: StarWarsService) {
  }

  ngOnInit() {
    this.getPeople();
  }

  ngOnDestroy() {
    // Forma #1 de matar subscripciones
    if(this.peopleSubscription){
      this.peopleSubscription.unsubscribe();
    }
  }

  getPeople() {
    this.peopleSubscription = this.starWarsService
      .getPeople()
      .subscribe((response) => {
        this.people = response.results;
        console.log('This is people ', this.people)
      })
  }

  getPeople2() {
    this.starWarsService
      .getPeople()
      .pipe(
        // Forma #2 de matar subscripcion - Usando first, la subscripcion hace unsubscribe internamente despues de obtener la primera informacion
        first()
      )
      .subscribe((response) => {
        this.people = response.results;
        console.log('This is people ', this.people)
      })
  }

}
