import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bootstrap-demo',
  templateUrl: './bootstrap-demo.component.html',
  styleUrls: ['./bootstrap-demo.component.css']
})
export class BootstrapDemoComponent implements OnInit {


  product=[
    {id:1,product:'Shahi Utane',price:30,quantity:'30gm',description:'Made By Pure Ayurevedic'},
    {id:2,product:'Perfume Chandan',price:130,quantity:'60ml',description:'Pure Water & Alcholic base'},
    {id:3,product:'Attar',price:60,quantity:'5ml',description:'Pure oil base'},
    {id:4,product:'Gulab Utane',price:60,quantity:'60gm',description:'Made By Pure Ayurevedic'},

  ];

  constructor() { }

  ngOnInit() {
  }

}
