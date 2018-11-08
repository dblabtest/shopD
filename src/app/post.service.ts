import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Post } from './post';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class PostService {

  private postsUrl = 'http://jsonplaceholder.typicode.com/posts'; 

  constructor(private http: HttpClient) { }

getPosts (): Observable<Post[]> {
  return this.http.get<Post[]>(this.postsUrl)
}

getPost(id: number): Observable<Post> {
  const url = `${this.postsUrl}/${id}`;
  return this.http.get<Post>(url)
}

deletePost (post: Post | number): Observable<Post> {
  const id = typeof post === 'number' ? post : post.id;
  const url = `${this.postsUrl}/${id}`;

  return this.http.delete<Post>(url);
}


}