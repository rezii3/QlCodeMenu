import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DrinkRoutingModule } from './drink-routing.module';
import { DrinkCardComponent } from './drink-card/drink-card.component';


@NgModule({
  declarations: [
    DrinkCardComponent
  ],
  exports: [
    DrinkCardComponent
  ],
  imports: [
    CommonModule,
    DrinkRoutingModule
  ]
})
export class DrinkModule { }
