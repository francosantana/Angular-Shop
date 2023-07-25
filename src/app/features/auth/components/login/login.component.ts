import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// Store imports
import { Store, select } from '@ngrx/store';
import { RootState } from 'src/app/core/auth/models/auth-model';
import { loginAction } from 'src/app/core/auth/state/auth-actions';
import { selectError, selectUser } from 'src/app/core/auth/state/auth-selector';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  $error = this.state.pipe(select(selectError))

  constructor(private state: Store<RootState>, private router: Router){ }

  ngOnInit(): void {
    this.state.pipe(select(selectUser)).subscribe(
      user => {
        if(user) this.router.navigate(['/posts'])
      }
    )
  }

  submitForm(){
    const { username, password} =  this.form.value
    if(!username || !password || this.form.invalid) return
    
    this.state.dispatch(loginAction({username, password}))
  }

}
