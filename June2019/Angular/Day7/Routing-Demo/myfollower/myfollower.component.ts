import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-myfollower',
  templateUrl: './myfollower.component.html',
  styleUrls: ['./myfollower.component.css']
})
export class MyfollowerComponent implements OnInit {

  
  constructor(private router:ActivatedRoute) {

   }

  ngOnInit() {

    this.router.paramMap
    .subscribe(param1=>{
      console.log(param1);
      let name=param1.get('username');
      console.log("Name IS : "+name);

    });
    

  }

}
