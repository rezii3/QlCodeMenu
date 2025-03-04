import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { MenuCardsComponent } from './menu-cards/menu-cards.component';


@NgModule({
  declarations: [
    MenuCardsComponent
  ],
  exports: [
    MenuCardsComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
