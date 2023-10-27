import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeletePricePage } from './delete-price.page';

const routes: Routes = [
  {
    path: '',
    component: DeletePricePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeletePricePageRoutingModule {}
