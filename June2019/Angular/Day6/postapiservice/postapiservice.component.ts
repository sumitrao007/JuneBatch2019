import { Component, OnInit } from '@angular/core';

import { PostService } from '../post.service';

@Component({
  selector: 'app-postapiservice',
  templateUrl: './postapiservice.component.html',
  styleUrls: ['./postapiservice.component.css']
})
export class PostapiserviceComponent implements OnInit {
 
  posts:any[]; 

  constructor(private service:PostService) {
    
   }

  ngOnInit() {
    this.service.getpostdata()
    .subscribe(response=>{
      console.log(response.json());
    this.posts=response.json();
     },
     (error1:Response)=>{

      alert('Unexpected Out Put');

     }
     );

  }

  AddPost(title){
    let createdata:any={title: title.value};
       title.value='';
       this.service.addPostData(createdata)
       .subscribe(response=>{
            console.log(response.json());
            createdata.id=response.json().id;
            this.posts.splice(0,0,createdata);
          })
  }

  UpdateData(item){
    this.service.UpdatePostData(item)
    .subscribe(response=>{
          console.log(response.json());
        })  
  }

  DeleteData(item){
    this.service.DeletePostdata(item)
    .subscribe(response=>{
           console.log(response.json());
         });
  }

}
