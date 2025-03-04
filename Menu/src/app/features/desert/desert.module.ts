import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesertRoutingModule } from './desert-routing.module';
import { DesertCardsComponent } from './desert-cards/desert-cards.component';


@NgModule({
  declarations: [
    DesertCardsComponent
  ],
  imports: [
    CommonModule,
    DesertRoutingModule
  ]
})
export class DesertModule { }
