import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddVerifiedRemotePageRoutingModule } from './add-verified-remote-routing.module';

import { AddVerifiedRemotePage } from './add-verified-remote.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddVerifiedRemotePageRoutingModule
  ],
  declarations: [AddVerifiedRemotePage]
})
export class AddVerifiedRemotePageModule {}
