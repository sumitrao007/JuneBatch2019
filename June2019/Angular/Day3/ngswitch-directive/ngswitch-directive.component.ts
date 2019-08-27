import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitch-directive',
  templateUrl: './ngswitch-directive.component.html',
  styleUrls: ['./ngswitch-directive.component.css']
})
export class NgswitchDirectiveComponent implements OnInit {

  colorname:string="green1";

  colorname1:string="blue";
  constructor() { }

  ngOnInit() {
  }

}
