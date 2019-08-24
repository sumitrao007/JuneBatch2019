import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.css']
})
export class ClassBindingComponent implements OnInit {

  myclass1:string="text-sucess1";
  isclass:boolean=false;
  myclass2:string="text-danger1";
  
  count:number=7;
   myclass3:string="text-warning1";

   haserror:boolean=true;
   isspecial:boolean=true;

   rating:number=1;
   mychangeapply:string="text-danger1";


  myclssobj={
    "text-sucess1" :!this.haserror,
    "text-danger1" :this.haserror,
    "text-special" : this.isspecial
  };

  changecolor(){
    this.mychangeapply="text-sucess1";
  }

  

  constructor() { }

  ngOnInit() {
  }

}
