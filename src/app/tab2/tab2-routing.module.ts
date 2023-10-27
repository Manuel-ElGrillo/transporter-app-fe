import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab2Page } from './tab2.page';

const routes: Routes = [
  {
    path: '',
    component: Tab2Page,
  },
  {
    path: 'edit-price',
    loadChildren: () => import('./edit-price/edit-price.module').then( m => m.EditPricePageModule)
  },
  {
    path: 'delete-price',
    loadChildren: () => import('./delete-price/delete-price.module').then( m => m.DeletePricePageModule)
  },
  {
    path: 'new-price',
    loadChildren: () => import('./new-price/new-price.module').then( m => m.NewPricePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
