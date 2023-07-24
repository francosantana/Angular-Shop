import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { tap, distinctUntilChanged } from 'rxjs';

import { SearchResponse } from '../models/posts.model';
import { environment } from 'src/environment/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private search$ = new BehaviorSubject<SearchResponse>({
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

  searchPost(key: string){
    return this.http.get<SearchResponse>(environment.apiUrl + `/posts/search?q=${key}`).pipe(
      tap(response => this.search$.next(response))
    )
  }

  constructor(private http: HttpClient) { }
}
