import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SoupRoutingModule } from './soup-routing.module';
import { SoupCardsComponent } from './soup-cards/soup-cards.component';


@NgModule({
  declarations: [
    SoupCardsComponent
  ],
  imports: [
    CommonModule,
    SoupRoutingModule
  ]
})
export class SoupModule { }
