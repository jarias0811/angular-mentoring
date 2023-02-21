import {Component, OnInit} from '@angular/core';
import {Observable, Observer} from "rxjs";

@Component({
  selector: 'app-director',
  templateUrl: './director.component.html',
  styleUrls: ['./director.component.scss']
})
export class DirectorComponent implements OnInit{
  time: Observable<any> | undefined;

  constructor() {
  }

  ngOnInit() {
    this.time = new Observable<string>((observer: Observer<string>) => {
      setInterval(() => observer.next(new Date().toString()), 1000);
    });
  }

}
