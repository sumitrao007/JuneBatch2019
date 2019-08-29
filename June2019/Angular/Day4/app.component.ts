import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Input-Output';

  mes:string="Data From Parent Component";
  myobj={
    name:"Hefshine",
    rollno:5,
    status:"Qualify for Advanced Java Course"
  };

  myarrobj=[
    {name:"Hefshine",
    rollno:5,
    status:"Qualify for Advanced Java Course"},
    {name:"PVT",
    rollno:25,
    status:"Qualify for Advanced Java Course"},
    {name:"LTD",
    rollno:30,
    status:"NOt Qualify for Advanced Java Course"}
  ];

  
  // message:string;

  message={};

}
