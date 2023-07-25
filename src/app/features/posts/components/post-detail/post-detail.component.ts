import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../service/posts.service';
import { Post } from '../../models/posts.model';
@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute, private postsService: PostsService){}
  post: Post | null = null

  ngOnInit(): void {
    const postId = Number(this.route.snapshot.paramMap.get('id'))

    // Not allow empty id or NaN number
    if(!postId || isNaN(postId)) return
  
    this.postsService.getPost(postId).subscribe(
      post =>{
        //ToDo : Handle post on component
        this.post = post
      }
    )
  }


}
