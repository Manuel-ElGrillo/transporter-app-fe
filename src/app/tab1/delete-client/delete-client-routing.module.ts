import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeleteClientPage } from './delete-client.page';

const routes: Routes = [
  {
    path: '',
    component: DeleteClientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeleteClientPageRoutingModule {}
