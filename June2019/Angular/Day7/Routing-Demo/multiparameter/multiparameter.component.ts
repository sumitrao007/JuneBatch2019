import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-multiparameter',
  templateUrl: './multiparameter.component.html',
  styleUrls: ['./multiparameter.component.css']
})
export class MultiparameterComponent implements OnInit {

  constructor(private router:ActivatedRoute) { 

  }

  ngOnInit() {
    this.router.paramMap
    .subscribe(param=>{
      console.log(param);
      let name=param.get('username');
      console.log("Name Is :: "+name);
      let ID=+param.get('id');
      console.log("ID Is :: "+ID);
      let res =ID+20;
      console.log(res);
    });
  }

}
