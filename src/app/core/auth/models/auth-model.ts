
//Actions ------- >
export interface LoginAction{
    username: string,
    password: string
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
    user: User | null
}

export interface RootState {
    auth: AuthState
}