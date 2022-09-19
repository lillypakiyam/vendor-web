import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BusinessCategoryPageRoutingModule } from './business-category-routing.module';

import { BusinessCategoryPage } from './business-category.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BusinessCategoryPageRoutingModule
  ],
  declarations: [BusinessCategoryPage]
})
export class BusinessCategoryPageModule {}
