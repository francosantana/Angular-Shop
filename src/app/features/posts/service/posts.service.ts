import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { tap, distinctUntilChanged, switchMap, of } from 'rxjs';

import { PostsResponse, Post } from '../models/posts.model';
import { environment } from 'src/environment/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  filter$ = new BehaviorSubject<string>('')

  filteredValues$ = this.filter$.asObservable().pipe(
    switchMap(input =>{
      const posts = this.posts$.value.posts.filter(
        post => post.body.includes(input)
      )
      return of(posts)
    })
  )

  getvalue(){
    this.filteredValues$.subscribe()
  }

  private search$ = new BehaviorSubject<PostsResponse>({
    posts: [],
    total: 0,
    skip: 0,
    limit: 0
  })

  public posts$ = new BehaviorSubject<PostsResponse>({
    posts: [],
    total: 0,
    skip: 0,
    limit: 0
  })

  //Skip all the followed empty emissions
  searchState$ = this.search$.asObservable().pipe(distinctUntilChanged(
    (prev, curr) =>{
      return ((prev.total === curr.total) && curr.total === 0 )
    }
  ))

  getAllPosts(){
    return this.http.get<PostsResponse>(environment.apiUrl + '/posts').pipe(
      tap(response => {this.posts$.next(response)}) )
  }

  searchPost(key: string){
    return this.http.get<PostsResponse>(environment.apiUrl + `/posts/search?q=${key}`).pipe(
      tap(response => this.search$.next(response))
    )
  }

  getPost(id: number){
    return this.http.get<Post>(environment.apiUrl + `/posts/${id}`)
  }

  constructor(private http: HttpClient) { }
}
