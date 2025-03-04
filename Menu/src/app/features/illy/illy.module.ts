import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IllyRoutingModule } from './illy-routing.module';
import { IllyCardsComponent } from './illy-cards/illy-cards.component';


@NgModule({
  declarations: [
    IllyCardsComponent
  ],
  imports: [
    CommonModule,
    IllyRoutingModule
  ]
})
export class IllyModule { }
