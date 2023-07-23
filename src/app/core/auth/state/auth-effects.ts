import {Injectable} from '@angular/core'
import { createEffect, ofType, Actions, } from '@ngrx/effects'
import { AuthService } from '../service/auth.service'
import { loginAction, updateUserAction, logOutAction, updateErrorAction} from './auth-actions'

import { switchMap, map, tap, catchError, of} from 'rxjs'

@Injectable()
export class AuthEffects {
    constructor(private authService: AuthService, private actions$: Actions) {}

    login$ = createEffect(()=> this.actions$.pipe(
        ofType(loginAction),
        switchMap(action => {
            const {username, password} = action
            return this.authService.login(username, password).pipe(
                map(user => updateUserAction({user})),
                catchError(error => {
                    return of(updateErrorAction({error}))
                })
            )}),
    ))

    logOut$ = createEffect(()=> this.actions$.pipe(
        ofType(logOutAction),
        tap(()=> this.authService.logOut()),
        map(() => updateUserAction({user: null}))
    ))
}
