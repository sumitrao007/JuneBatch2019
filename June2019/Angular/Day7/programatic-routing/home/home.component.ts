import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) {

   }

  ngOnInit() {

  }

  multiparameter={id1:8,name:'Sumit Raokhande'};
  onAboutUs(){
    this.router.navigate(['/aboutus']);
  }
  onContactus(){
    this.router.navigate(['/contactus']);
  }
  onFollower(){
    this.router.navigate(['/follower']);
  }
  onParameterbtn(){
    this.router.navigate(['/parameterbtn',this.multiparameter.id1,this.multiparameter.name]);
  }
  

}
