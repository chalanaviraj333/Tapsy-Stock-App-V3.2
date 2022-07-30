import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpareKeyProgramPage } from './spare-key-program.page';

const routes: Routes = [
  {
    path: '',
    component: SpareKeyProgramPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpareKeyProgramPageRoutingModule {}
