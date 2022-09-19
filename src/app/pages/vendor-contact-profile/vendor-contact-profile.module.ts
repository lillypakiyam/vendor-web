import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VendorContactProfilePageRoutingModule } from './vendor-contact-profile-routing.module';

import { VendorContactProfilePage } from './vendor-contact-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VendorContactProfilePageRoutingModule
  ],
  declarations: [VendorContactProfilePage]
})
export class VendorContactProfilePageModule {}
