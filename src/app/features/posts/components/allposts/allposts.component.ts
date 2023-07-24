import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../service/posts.service';

@Component({
  selector: 'app-allposts',
  templateUrl: './allposts.component.html',
  styleUrls: ['./allposts.component.scss']
})
export class AllPostsComponent implements OnInit {
  constructor(public postsService: PostsService){}

  ngOnInit(): void {
    this.postsService.getAllPosts().subscribe()
  }
}
