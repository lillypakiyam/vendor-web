import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForgetVendorIDPage } from './forget-vendor-id.page';

const routes: Routes = [
  {
    path: '',
    component: ForgetVendorIDPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForgetVendorIDPageRoutingModule {}
