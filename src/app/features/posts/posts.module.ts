import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllpostsComponent } from './components/allposts/allposts.component';
import { SearchComponent } from './components/search/search.component';
import { PostComponent } from './components/post/post.component';



@NgModule({
  declarations: [
    AllpostsComponent,
    SearchComponent,
    PostComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PostsModule { }
