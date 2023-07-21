import { createAction, props } from '@ngrx/store';
import { LoginAction, User } from '../models/auth-model';

export const loginAction = createAction(
    '[Auth] Login',
    props<LoginAction>()
)

export const logOutAction = createAction(
    '[Auth] LogOut'
)

export const updateUserAction = createAction(
    '[Auth] Update User',
    props<{user: User | null}>()
)

