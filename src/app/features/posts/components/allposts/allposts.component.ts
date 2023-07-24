import { Component } from '@angular/core';
import { PostsService } from '../../service/posts.service';

@Component({
  selector: 'app-allposts',
  templateUrl: './allposts.component.html',
  styleUrls: ['./allposts.component.scss']
})
export class AllPostsComponent {
  constructor(public postsService: PostsService){}
}
