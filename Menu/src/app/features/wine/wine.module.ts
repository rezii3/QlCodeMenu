import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WineRoutingModule } from './wine-routing.module';
import { WineCardComponent } from './wine-card/wine-card.component';


@NgModule({
  declarations: [
    WineCardComponent
  ],
  exports: [
    WineCardComponent
  ],
  imports: [
    CommonModule,
    WineRoutingModule
  ]
})
export class WineModule { }
