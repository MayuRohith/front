import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  loginUrl = "http://localhost:8080/login";

  getLogin(){
    return this.http.get<Login[]>(this.loginUrl);
  }
}
