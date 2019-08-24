import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  mystr:string="";
  myinput:string="";
  myinput1:string="";
  myinput2:string="";
  mycal:number=0;
  mystr1:string="";
  num1:number=2;
  num2:number=3;
  mycal1:number=0;

  mystr3:string="";

  count:number=0;

  msg:string="";

  msg1:string="";

  constructor() { }

  ngOnInit() {
  }

  OnClick(){
    console.log("welcome to Event Binding");
    this.mystr="welcome to Event Binding";
  }

  onClick1(event1){
  console.log(event1);

  console.log(event1.target.value);

  }
  OnInputclick(){
    console.log('Input click!!!');
    this.myinput="U Click Input";
  }

  OnInputclick1(){
    console.log("Key Up Event");
    this.myinput1="Key Up Event";
  }

  OnInputclick2(){
    console.log("Key Down Event");
    this.myinput2="Key Down Event";
  }

  CLICKME1(){

    if(this.count==0){
      console.log('Welcome to Hefshine');
      this.mystr3='Welcome to Hefshine';
      this.count++;
    }         
    
  }

  CLICKME2(){
      this.msg=" Hi Bhushan & Vaibhav ,Sorry Prashant"
  }

  CLICKME3(){
    this.msg1="Sorry Bhushan & Vaibhav, "
  }


}
