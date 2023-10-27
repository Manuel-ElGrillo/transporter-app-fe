import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab3Page } from './tab3.page';

const routes: Routes = [
  {
    path: '',
    component: Tab3Page,
  },
  {
    path: 'new-travel',
    loadChildren: () => import('./new-travel/new-travel.module').then( m => m.NewTravelPageModule)
  },
  {
    path: 'edit-travel',
    loadChildren: () => import('./edit-travel/edit-travel.module').then( m => m.EditTravelPageModule)
  },
  {
    path: 'delete-travel',
    loadChildren: () => import('./delete-travel/delete-travel.module').then( m => m.DeleteTravelPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab3PageRoutingModule {}
