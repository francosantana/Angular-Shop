import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllPostsComponent } from './components/allposts/allposts.component';
import { SearchComponent } from './components/search/search.component';
import { PostComponent } from './components/post/post.component';
import { PostsRoutingModule } from './posts-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AllPostsComponent,
    SearchComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    SharedModule
  ]
})
export class PostsModule { }
