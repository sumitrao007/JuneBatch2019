import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.css']
})
export class StyleBindingComponent implements OnInit {

  mycolor:string="red";
  iscolor:boolean=false;
  mystyle={
    color:'green',
    fontStyle :'italic',
    fontSize :'50px'    
  }
  divcolor:string="brown";

  constructor() { }

  ngOnInit() {
  }

  onRed(){
    this.divcolor="red";
  }
  onGreen(){
    this.divcolor="green";
  }
  onBlue(){
    this.divcolor="blue";
  }

  onBlack(){
    this.divcolor="black";
  }

  onchangecolor(str:string){

    if(str==='red'){
      this.divcolor='red';
    }else if(str==='green'){
      this.divcolor='green';
    }else if(str==='blue'){
      this.divcolor='blue';
    }else if(str==='black'){
      this.divcolor='black';
    }else{
      this.divcolor='brown';
    }
  }

  onchangecolor1(event){

    if(event.target.value=='red'){
      this.divcolor='red';
    }else if(event.target.value=='green'){
      this.divcolor='green';
    }else if(event.target.value=='blue'){
      this.divcolor='blue';
    }else if(event.target.value=='black'){
      this.divcolor='black';
    }else{
      this.divcolor='brown';
    }
  }


}
