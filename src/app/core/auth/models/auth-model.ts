import { HttpErrorResponse } from "@angular/common/http"

//Actions ------- >
export interface LoginAction{
    username: string,
    password: string
}

export interface ErrorAction{
    error: HttpErrorResponse | null
}

// State  ------->
export interface User{
    id: number
    username: string
    email: string
    firstName: string
    lastName: string
    gender: string
    image: string
    token: string
}

export interface AuthState {
    user: User | null,
    error: HttpErrorResponse | null
}

export interface RootState {
    auth: AuthState
}