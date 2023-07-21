import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { RootState, User } from './core/auth/models/auth-model';
import { loginAction, logOutAction } from './core/auth/state/auth-actions';
import { selectUser } from './core/auth/state/auth-selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  user : User | null = null

  constructor(private store: Store<RootState>){}

  login(){
    this.store.dispatch(loginAction({username: 'atuny0', password: '9uQFF1Lh'}))
  }

  logout(){
    this.store.dispatch(logOutAction())
  }
  

  ngOnInit(): void {
    this.store.select(selectUser).subscribe(
       user => this.user = user
      )
  }
}
