import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from 'src/app/core/guards/auth.guard';
const routes: Routes = [
    {path: 'login', component: LoginComponent, canActivate: [authGuard('denied')] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
