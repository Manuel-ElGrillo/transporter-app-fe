import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeleteTravelPageRoutingModule } from './delete-travel-routing.module';

import { DeleteTravelPage } from './delete-travel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeleteTravelPageRoutingModule
  ],
  declarations: [DeleteTravelPage]
})
export class DeleteTravelPageModule {}
