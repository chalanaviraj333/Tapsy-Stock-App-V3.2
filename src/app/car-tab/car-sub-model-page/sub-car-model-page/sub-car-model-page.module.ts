import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubCarModelPagePageRoutingModule } from './sub-car-model-page-routing.module';

import { SubCarModelPagePage } from './sub-car-model-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubCarModelPagePageRoutingModule
  ],
  declarations: [SubCarModelPagePage]
})
export class SubCarModelPagePageModule {}
