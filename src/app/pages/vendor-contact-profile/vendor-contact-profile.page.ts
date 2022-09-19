import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendor-contact-profile',
  templateUrl: './vendor-contact-profile.page.html',
  styleUrls: ['./vendor-contact-profile.page.scss'],
})
export class VendorContactProfilePage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  moveToBack(){
    this.router.navigate(['/vendor-profile'])
  }
  moveTo(){
    this.router.navigate(['/bank-details']);
  }
  moveToLog(){
    this.router.navigate(['/logout'])
  }
  login(){
    this.router.navigate(['/login'])
  }
}
