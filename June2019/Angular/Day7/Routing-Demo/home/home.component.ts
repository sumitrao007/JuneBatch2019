import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  queryparam={
    page:'Page1',
    order:'Newest'
  };
  constructor() { }

  ngOnInit() {
  }

}
