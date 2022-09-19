import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-business-category',
  templateUrl: './business-category.page.html',
  styleUrls: ['./business-category.page.scss'],
})
export class BusinessCategoryPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
moveToBack(){
  this.router.navigate(['/bank-details'])
}
moveTo(){
  this.router.navigate(['/tax-details'])
}
moveToLog(){
  this.router.navigate(['/logout'])
}
}
