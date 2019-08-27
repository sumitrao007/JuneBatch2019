import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templateref-variable',
  templateUrl: './templateref-variable.component.html',
  styleUrls: ['./templateref-variable.component.css']
})
export class TemplaterefVariableComponent implements OnInit {

  imgsr:string='../../assets/Desert.jpg';
  constructor() { }

  ngOnInit() {
  }
  templatevar(value){
    console.log(value);
  }

  Reamme(Name){

    Name.style.background="#00ff00";
    Name.style.color="red";
    console.log(Name.value);
  }

  LoadImage(divtemp){
    divtemp.style.backgroundImage="url('../../assets/Desert.jpg')";
  }
}
