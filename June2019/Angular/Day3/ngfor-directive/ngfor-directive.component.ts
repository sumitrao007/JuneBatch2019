import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor-directive',
  templateUrl: './ngfor-directive.component.html',
  styleUrls: ['./ngfor-directive.component.css']
})
export class NgforDirectiveComponent implements OnInit {
  mycolor:string[]=['red','blue','green','black','pink'];

  mycolor1=[
    {name:"Sumit",salary:50000},
    {name:"Kiran",salary:60000},
    {name:"Spruha",salary:60000},    
  ];
  constructor() { }

  ngOnInit() {
  }

}
