import { GetTodos} from './get-todos';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private HTTP_URL = 'https://jsonplaceholder.typicode.com/posts';
  private headers = { 'content-type': 'application/json;  charset=UTF-8'};
  constructor(private http: HttpClient ) { }

  getTodos() {
    return this.http.get(this.HTTP_URL, {headers: this.headers});
  }

  putPost(post: GetTodos){
    return this.http.put(this.HTTP_URL + '/' + post, {headers: this.headers});
  }

}
