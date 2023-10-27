import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeleteTravelPage } from './delete-travel.page';

const routes: Routes = [
  {
    path: '',
    component: DeleteTravelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeleteTravelPageRoutingModule {}
