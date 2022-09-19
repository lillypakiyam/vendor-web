import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.page.html',
  styleUrls: ['./bank-details.page.scss'],
})
export class BankDetailsPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  moveToBack(){
    this.router.navigate(['/vendor-contact-profile'])
  }
  moveTo(){
    this.router.navigate(['/business-category'])
  }
  moveToLog(){
    this.router.navigate(['/logout'])
  }
}
