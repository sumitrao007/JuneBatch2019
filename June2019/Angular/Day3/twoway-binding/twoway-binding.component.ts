import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twoway-binding',
  templateUrl: './twoway-binding.component.html',
  styleUrls: ['./twoway-binding.component.css']
})
export class TwowayBindingComponent implements OnInit {

  name:string="HefShine";
  myvalue:string="";
  ishidden:boolean=true;
  constructor() { }

  ngOnInit() {
  }

  ClickMe(){
    this.ishidden=false;
  }

}
