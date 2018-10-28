import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Login } from '../login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  login: Login[];

  ngOnInit() {
    this.viewLogin();
  }

  viewLogin(){
    this.loginService.getLogin().subscribe(data=>{
      this.login = data;
    })
  }

}
