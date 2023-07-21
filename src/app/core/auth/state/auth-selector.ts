import { createSelector } from '@ngrx/store';
import { RootState } from '../models/auth-model';

const selectAuth = (state: RootState) => state.auth

export const selectUser = createSelector(
    selectAuth,
    (auth) => auth.user
)