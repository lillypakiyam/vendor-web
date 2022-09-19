import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TaxRecordPageRoutingModule } from './tax-record-routing.module';

import { TaxRecordPage } from './tax-record.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TaxRecordPageRoutingModule
  ],
  declarations: [TaxRecordPage]
})
export class TaxRecordPageModule {}
