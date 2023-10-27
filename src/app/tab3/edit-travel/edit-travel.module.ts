import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditTravelPageRoutingModule } from './edit-travel-routing.module';

import { EditTravelPage } from './edit-travel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditTravelPageRoutingModule
  ],
  declarations: [EditTravelPage]
})
export class EditTravelPageModule {}
