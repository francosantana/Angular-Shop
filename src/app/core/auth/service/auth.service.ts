import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {tap} from 'rxjs'
import { environment } from 'src/environment/environment.prod';


// State managment
import { User } from '../models/auth-model';
import { UserData } from '../models/user.model';

const API_URL = environment.apiUrl

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  get getUser(){
    return localStorage.getItem('jwt')
  }

  setUser(jwt: string){
    localStorage.setItem('jwt', jwt)
  }

  clearUser(){
    localStorage.removeItem('jwt')
  }

  login(username: string, password: string){
    return this.http.post<User>(API_URL + '/auth/login', {
      username, password
    }).pipe(tap((user)=> this.setUser(user.token)))
  }

  logOut(){
    this.clearUser()
  }

  fetchUser(id: string){
    return this.http.get<UserData>(API_URL + `/users/${id}`)
  }


}
