import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaladRoutingModule } from './salad-routing.module';
import { SaladCardsComponent } from './salad-cards/salad-cards.component';


@NgModule({
  declarations: [
    SaladCardsComponent
  ],
  imports: [
    CommonModule,
    SaladRoutingModule
  ]
})
export class SaladModule { }
