import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-childcomp',
  templateUrl: './childcomp.component.html',
  styleUrls: ['./childcomp.component.css']
})
export class ChildcompComponent implements OnInit {

// @Input() parentdata:string;
// @Input() parentdata;
@Input() parentdata;

@Output() childData=new EventEmitter();

mychildobj={
  name:"Sumit",
  salary:100000
};


  constructor() { }

  ngOnInit() {
  }

  DataToSend(){
    // this.childData.emit('Data From Child Component');
    this.childData.emit(this.mychildobj);
  }

}
