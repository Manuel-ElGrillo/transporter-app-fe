import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  {
    path: 'new-client',
    loadChildren: () => import('./new-client/new-client.module').then( m => m.NewClientPageModule)
  },
  {
    path: 'edit-client',
    loadChildren: () => import('./edit-client/edit-client.module').then( m => m.EditClientPageModule)
  },
  {
    path: 'delete-client',
    loadChildren: () => import('./delete-client/delete-client.module').then( m => m.DeleteClientPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
