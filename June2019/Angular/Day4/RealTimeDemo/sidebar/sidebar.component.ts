import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Output() id=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onClick(i){
    this.id.emit(i);
  }

}
