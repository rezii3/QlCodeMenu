import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DrinkRoutingModule } from './drink-routing.module';
import { DrinkCardComponent } from './drink-card/drink-card.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    DrinkCardComponent
  ],
  exports: [
    DrinkCardComponent
  ],
  imports: [
    CommonModule,
    DrinkRoutingModule,
    SharedModule
  ]
})
export class DrinkModule { }
