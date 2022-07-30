import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpareKeyProgramPageRoutingModule } from './spare-key-program-routing.module';

import { SpareKeyProgramPage } from './spare-key-program.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpareKeyProgramPageRoutingModule
  ],
  declarations: [SpareKeyProgramPage]
})
export class SpareKeyProgramPageModule {}
