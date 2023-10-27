import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeleteClientPageRoutingModule } from './delete-client-routing.module';

import { DeleteClientPage } from './delete-client.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeleteClientPageRoutingModule
  ],
  declarations: [DeleteClientPage]
})
export class DeleteClientPageModule {}
