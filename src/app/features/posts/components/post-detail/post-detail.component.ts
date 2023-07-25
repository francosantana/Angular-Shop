import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, map, catchError, of} from 'rxjs';

import { PostsService } from '../../service/posts.service';
import { AuthService } from 'src/app/core/auth/service/auth.service';
import { Post } from '../../models/posts.model';
import { UserData } from 'src/app/core/auth/models/user.model';

interface DetailedPost{
  post: Post, 
  user: UserData | null
}

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})

export class PostDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute, private postsService: PostsService, private authService: AuthService){}
  detailedPost: DetailedPost | null = null

  ngOnInit(): void {
    const postId = Number(this.route.snapshot.paramMap.get('id'))

    // Not allow empty id or NaN number
    if(!postId || isNaN(postId)) return
  
    //Fetch post , author and join it in a single object (post)
    this.postsService.getPost(postId).pipe(
      switchMap( 
        post => this.authService.fetchUser(post.userId).pipe(
          map(user => ({post, user})),
          catchError(
            err => of({post, user: null})
          )
        )
    )).subscribe(post =>{
       this.detailedPost = post
      }
    )
  }
}
