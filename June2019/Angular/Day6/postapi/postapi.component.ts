import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-postapi',
  templateUrl: './postapi.component.html',
  styleUrls: ['./postapi.component.css']
})
export class PostapiComponent implements OnInit {

  posts:any[];

 url:string='https://jsonplaceholder.typicode.com/posts';

  constructor(private http:Http) {

    this.http.get(this.url)
    .subscribe(response=>{

      console.log(response.json());
    this.posts=response.json();


     });

   }

   AddPost(title){

    let createdata:any={title: title.value};
    title.value='';
    this.http.post(this.url,JSON.stringify(createdata) )
    .subscribe(response=>{
      console.log(response.json());
      createdata.id=response.json().id;
      this.posts.splice(0,0,createdata);
    })

   }

   UpdateData(item){

    this.http.put(this.url+'/'+item.id,JSON.stringify(item))
    .subscribe(response=>{
      console.log(response.json());
    })    
   }

   DeleteData(item){
     this.http.delete(this.url+'/'+item.id)
     .subscribe(response=>{
       console.log(response.json());
     });
   }




  ngOnInit() {
  }

}
