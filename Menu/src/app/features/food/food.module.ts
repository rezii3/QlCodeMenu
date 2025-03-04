import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodRoutingModule } from './food-routing.module';
import { FoodCardComponent } from './food-card/food-card.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    FoodCardComponent
  ],
  exports: [
    FoodCardComponent
  ],
  imports: [
    CommonModule,
    FoodRoutingModule,
    SharedModule
  ]
})
export class FoodModule { }
