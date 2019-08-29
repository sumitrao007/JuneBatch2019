import { Component, ViewChild } from '@angular/core';
import { ListofsongsComponent } from './listofsongs/listofsongs.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parent-viewchild';

  @ViewChild(ListofsongsComponent) childcnt:ListofsongsComponent;

  Onfilter(event1){
    console.log(event1+1);
    this.childcnt.loadSongs(event1+1);
  }
  
}
