import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddVerifiedRemotePage } from './add-verified-remote.page';

const routes: Routes = [
  {
    path: '',
    component: AddVerifiedRemotePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddVerifiedRemotePageRoutingModule {}
