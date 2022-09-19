import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tax-record',
  templateUrl: './tax-record.page.html',
  styleUrls: ['./tax-record.page.scss'],
})
export class TaxRecordPage implements OnInit {

  constructor( private router:Router) { }

  ngOnInit() {
  }
  moveToBack(){
    this.router.navigate(['/tax-details']);
  }
  moveToTaxForm(){
    this.router.navigate(['/tax-form']);
  }
}
