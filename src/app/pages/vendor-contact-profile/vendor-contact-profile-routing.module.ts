import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VendorContactProfilePage } from './vendor-contact-profile.page';

const routes: Routes = [
  {
    path: '',
    component: VendorContactProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendorContactProfilePageRoutingModule {}
