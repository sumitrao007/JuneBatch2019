import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
@Injectable({
    // we declare that this service should be created
  // by the root application injector.
    providedIn: 'root'
  })
export class PostService{

    url:string='https://jsonplaceholder.typicode.com/posts';
    constructor(private http:Http){
    }

    getpostdata(){
        return this.http.get(this.url);
    }
    addPostData(item1){
        return this.http.post(this.url,JSON.stringify(item1) )

    }

    UpdatePostData(item){
     return this.http.put(this.url+'/'+item.id,JSON.stringify(item));
    }

    DeletePostdata(item){
        return this.http.delete(this.url+'/'+item.id)
    }


    
}