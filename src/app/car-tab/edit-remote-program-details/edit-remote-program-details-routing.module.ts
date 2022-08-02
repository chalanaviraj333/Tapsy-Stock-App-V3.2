import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditRemoteProgramDetailsPage } from './edit-remote-program-details.page';

const routes: Routes = [
  {
    path: '',
    component: EditRemoteProgramDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditRemoteProgramDetailsPageRoutingModule {}
