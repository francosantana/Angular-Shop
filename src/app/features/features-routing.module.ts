import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {path: 'auth', loadChildren: ()=> import('./auth/auth.module').then(m => m.AuthModule) },
    {path: 'posts', loadChildren: ()=> import('./posts/posts.module').then(m => m.PostsModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
