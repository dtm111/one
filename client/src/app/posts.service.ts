import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class PostsService {
  
  cats: any  = []; 

  constructor(private http: Http) { }
  getPosts(){
    return this.cats;
  }
 
  getAllPosts() {
    this.cats = this.http.get('/api')
      .map(res => res.json());
    return this.cats;
  }
}
