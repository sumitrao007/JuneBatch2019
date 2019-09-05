import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-queryparameter',
  templateUrl: './queryparameter.component.html',
  styleUrls: ['./queryparameter.component.css']
})
export class QueryparameterComponent implements OnInit {


  constructor(private router:ActivatedRoute) { }

  ngOnInit() {
    this.router.queryParamMap
    .subscribe(param=>{
      console.log(param);
      let page1=param.get('page');
      console.log(page1);
      let order=param.get('order');
      console.log(order);

    });
  }
  

}
