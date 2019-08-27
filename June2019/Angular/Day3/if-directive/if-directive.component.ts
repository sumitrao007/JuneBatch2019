import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if-directive',
  templateUrl: './if-directive.component.html',
  styleUrls: ['./if-directive.component.css']
})
export class IfDirectiveComponent implements OnInit {

  rating:number=12;

  rating1:number=12;

  rating2:number=13;

  
  constructor() { }

  ngOnInit() {
  }

}
