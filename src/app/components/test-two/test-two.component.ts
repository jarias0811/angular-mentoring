import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-test-two',
  templateUrl: './test-two.component.html',
  styleUrls: ['./test-two.component.scss']
})
export class TestTwoComponent implements OnInit{
  id: number | undefined;

  constructor(
    private route: ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.route.params.subscribe(params =>{
      console.log(params)
      this.id = params['matchId'];
    })
  }
}
