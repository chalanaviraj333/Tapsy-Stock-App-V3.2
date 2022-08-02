import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditRemoteProgramDetailsPageRoutingModule } from './edit-remote-program-details-routing.module';

import { EditRemoteProgramDetailsPage } from './edit-remote-program-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditRemoteProgramDetailsPageRoutingModule
  ],
  declarations: [EditRemoteProgramDetailsPage]
})
export class EditRemoteProgramDetailsPageModule {}
