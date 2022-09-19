import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PasswordChangePage } from '../password-change/password-change.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  moveTo(){
    this.router.navigate(['/password-change']);
  }
  moveToPsw(){
    this.router.navigate(['/forget-psw'])
  }
  moveToId(){
    this.router.navigate(['/forget-vendor-id'])
  }
  login(){
    this.router.navigate(['/login'])
  }
}
