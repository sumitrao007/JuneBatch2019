import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-service-demo',
  templateUrl: './service-demo.component.html',
  styleUrls: ['./service-demo.component.css']
})
export class ServiceDemoComponent implements OnInit {

 courses:string[]=[];
 
  constructor(service1:CoursesService) { 
      // let service=new CoursesService();
      this.courses=service1.getCourses();
  }  
  
  
  ngOnInit() {
  }

}
