import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewPricePage } from './new-price.page';

const routes: Routes = [
  {
    path: '',
    component: NewPricePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewPricePageRoutingModule {}
