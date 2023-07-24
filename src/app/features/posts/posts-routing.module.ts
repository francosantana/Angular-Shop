import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllPostsComponent } from './components/allposts/allposts.component';
import { SearchComponent } from './components/search/search.component';
import { PostComponent } from './components/post/post.component';

const routes: Routes = [
    {path: '', component: AllPostsComponent },
    {path: 'search', component: SearchComponent },
    {path: ':id', component: PostComponent },
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
