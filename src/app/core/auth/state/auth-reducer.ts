import { createReducer, on } from '@ngrx/store';

import * as AuthActions from './auth-actions'

import { AuthState } from "../models/auth-model"


export const initialState: AuthState  = {
    user: null
}

export const authReducer = createReducer(
    initialState,
    on(AuthActions.updateUserAction, (state, {user}) => ({...state, user})),
)
