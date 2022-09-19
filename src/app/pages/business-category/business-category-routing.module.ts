import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BusinessCategoryPage } from './business-category.page';

const routes: Routes = [
  {
    path: '',
    component: BusinessCategoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusinessCategoryPageRoutingModule {}
