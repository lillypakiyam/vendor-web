import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForgetVendorIDPageRoutingModule } from './forget-vendor-id-routing.module';

import { ForgetVendorIDPage } from './forget-vendor-id.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForgetVendorIDPageRoutingModule
  ],
  declarations: [ForgetVendorIDPage]
})
export class ForgetVendorIDPageModule {}
