import { Component, OnInit, ViewChild } from '@angular/core';
import { ViewchildComponent } from '../viewchild/viewchild.component';

@Component({
  selector: 'app-parentcomp',
  templateUrl: './parentcomp.component.html',
  styleUrls: ['./parentcomp.component.css']
})
export class ParentcompComponent implements OnInit {

@ViewChild(ViewchildComponent) childdata:ViewchildComponent

  constructor() { }

  ngOnInit() {
  }

  Increment(){
    console.log("Eevent Is Generated Increase Method");
    this.childdata.Incrementbyone();
  }

  Decrement(){
    console.log("Eevent Is Generated Decrement Method");
    this.childdata.Decrementbyone();
  }

}
