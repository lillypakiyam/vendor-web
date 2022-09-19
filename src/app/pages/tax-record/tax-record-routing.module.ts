import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaxRecordPage } from './tax-record.page';

const routes: Routes = [
  {
    path: '',
    component: TaxRecordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaxRecordPageRoutingModule {}
