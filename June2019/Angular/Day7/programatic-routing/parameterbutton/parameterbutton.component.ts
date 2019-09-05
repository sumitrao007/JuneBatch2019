import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-parameterbutton',
  templateUrl: './parameterbutton.component.html',
  styleUrls: ['./parameterbutton.component.css']
})
export class ParameterbuttonComponent implements OnInit {

  constructor(private router:ActivatedRoute) { 

  }

  ngOnInit() {
    this.router.paramMap
    .subscribe(param=>{
    let id=+param.get('id');
    let Name=param.get('username');

    console.log("ID is :: "+id);
    console.log("Name is :: "+Name);
    });
  }

}
