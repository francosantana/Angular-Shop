import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../service/posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-allposts',
  templateUrl: './allposts.component.html',
  styleUrls: ['./allposts.component.scss']
})
export class AllPostsComponent implements OnInit {
  constructor(public postsService: PostsService, private router: Router){}

  ngOnInit(): void {
    this.postsService.getAllPosts().subscribe()
  }

  goToPost(id: number){
    this.router.navigate(['/posts/' + id])
  }
}
