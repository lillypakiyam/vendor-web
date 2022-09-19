import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tax-details',
  templateUrl: './tax-details.page.html',
  styleUrls: ['./tax-details.page.scss'],
})
export class TaxDetailsPage implements OnInit {

  provided= false
  constructor(private router :Router) { }

  ngOnInit() {
  }
  moveToLog(){
    this.router.navigate(['/logout'])
  }
  moveToBack(){
    this.router.navigate(['/business-category'])
  }
  moveToFinal(){
    this.router.navigate(['/final-submission'])
  }
  moveToTaxRec(){
    this.router.navigate(['/tax-record']);
  }

  select(eve){
    console.log(eve.detail)
    if(eve.detail.checked ===true){
      this.provided= true
    }else{
      this.provided= false

    }
  }
}
