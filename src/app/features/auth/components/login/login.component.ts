import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

// Store imports
import { Store, select } from '@ngrx/store';
import { RootState } from 'src/app/core/auth/models/auth-model';
import { loginAction } from 'src/app/core/auth/state/auth-actions';
import { selectError } from 'src/app/core/auth/state/auth-selector';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  form = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  $error = this.state.pipe(select(selectError))

  constructor(private state: Store<RootState>){ }

  submitForm(){

    console.log('submited')
    const { username, password} =  this.form.value
    if(!username || !password || this.form.invalid) return
    
    this.state.dispatch(loginAction({username, password}))
  }

}
