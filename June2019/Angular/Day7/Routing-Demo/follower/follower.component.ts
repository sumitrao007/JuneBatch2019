import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-follower',
  templateUrl: './follower.component.html',
  styleUrls: ['./follower.component.css']
})
export class FollowerComponent implements OnInit {

  follower={id1:9,username1:'sumit'};
  constructor() { }

  ngOnInit() {
  }

}
