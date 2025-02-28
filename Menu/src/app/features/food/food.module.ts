import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodRoutingModule } from './food-routing.module';
import { FoodCardComponent } from './food-card/food-card.component';


@NgModule({
  declarations: [
    FoodCardComponent
  ],
  exports: [
    FoodCardComponent
  ],
  imports: [
    CommonModule,
    FoodRoutingModule
  ]
})
export class FoodModule { }
