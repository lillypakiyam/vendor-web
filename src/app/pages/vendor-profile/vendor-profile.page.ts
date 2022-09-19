import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendor-profile',
  templateUrl: './vendor-profile.page.html',
  styleUrls: ['./vendor-profile.page.scss'],
})
export class VendorProfilePage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  moveToBack(){
    this.router.navigate(['/password-change'])
  }
  moveTo(){
    this.router.navigate(['/vendor-contact-profile']);
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
