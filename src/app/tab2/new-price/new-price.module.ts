import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewPricePageRoutingModule } from './new-price-routing.module';

import { NewPricePage } from './new-price.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewPricePageRoutingModule
  ],
  declarations: [NewPricePage]
})
export class NewPricePageModule {}
