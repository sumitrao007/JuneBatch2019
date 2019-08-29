import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listofsongs',
  templateUrl: './listofsongs.component.html',
  styleUrls: ['./listofsongs.component.css']
})
export class ListofsongsComponent implements OnInit {

color:string[]=['white','red','blue','green','black'];
  count:number=0;
  constructor() { }

  loadSongs(value){
    this.count=value;
  }

  ngOnInit() {
  }

}
