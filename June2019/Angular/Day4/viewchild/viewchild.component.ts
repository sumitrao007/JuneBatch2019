import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.css']
})
export class ViewchildComponent implements OnInit {

count:number=0;

  constructor() { }

  ngOnInit() {
  }

  Incrementbyone(){
    this.count=this.count+1;
  }
  Decrementbyone(){
    this.count=this.count-1;
  }

}
