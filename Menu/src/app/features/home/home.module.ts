import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { MainComponent } from './main/main.component';

import { DrinkModule } from "../drink/drink.module";
import { FoodModule } from "../food/food.module";
import { WineModule } from "../wine/wine.module";


@NgModule({
  declarations: [
    MainComponent,
  ],
  exports: [
    MainComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    DrinkModule,
    FoodModule,
    WineModule
]
})
export class HomeModule { }
