import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-builtin',
  templateUrl: './pipe-builtin.component.html',
  styleUrls: ['./pipe-builtin.component.css']
})
export class PipeBuiltinComponent implements OnInit {

  str:string="Welcome to my Angular Course";

  Emp={
    firstname:"Hefshine",
    lastname: "PVT LTD"
  };

  mydate=new Date();
mydate1 = new Date(2017,12,30);

  constructor() { }

  ngOnInit() {
  }

}
