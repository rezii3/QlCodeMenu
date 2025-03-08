import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsiaRoutingModule } from './asia-routing.module';
import { AsiaCardComponent } from './asia-card/asia-card.component';


@NgModule({
  declarations: [
    AsiaCardComponent
  ],
  imports: [
    CommonModule,
    AsiaRoutingModule
  ]
})
export class AsiaModule { }
