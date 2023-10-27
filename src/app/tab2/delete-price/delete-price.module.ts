import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeletePricePageRoutingModule } from './delete-price-routing.module';

import { DeletePricePage } from './delete-price.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeletePricePageRoutingModule
  ],
  declarations: [DeletePricePage]
})
export class DeletePricePageModule {}
