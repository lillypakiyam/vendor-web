import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-password-change',
  templateUrl: './password-change.page.html',
  styleUrls: ['./password-change.page.scss'],
})
export class PasswordChangePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  moveTo(){
    this.router.navigate(['/vendor-profile']);
  }
  login(){
    this.router.navigate(['/login'])
  }
  moveToPsw(){
    this.router.navigate(['/forget-psw']);
  }
  moveToId(){
    this.router.navigate(['/forget-vendor-id'])
  }
}
