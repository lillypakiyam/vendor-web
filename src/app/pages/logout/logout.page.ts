import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
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
