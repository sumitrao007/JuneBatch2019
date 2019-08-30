import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipe',
  templateUrl: './custom-pipe.component.html',
  styleUrls: ['./custom-pipe.component.css']
})
export class CustomPipeComponent implements OnInit {

  strtxt:string="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque voluptas sunt porro commodi harum nemo natus assumenda a laudantium id perspiciatis atque mollitia fuga, aspernatur consectetur earum vero laboriosam dolor?";
  constructor() { }

  ngOnInit() {
  }

}
