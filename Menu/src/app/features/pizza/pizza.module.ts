import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PizzaRoutingModule } from './pizza-routing.module';
import { PizzaCardComponent } from './pizza-card/pizza-card.component';


@NgModule({
  declarations: [
    PizzaCardComponent
  ],
  imports: [
    CommonModule,
    PizzaRoutingModule
  ]
})
export class PizzaModule { }
