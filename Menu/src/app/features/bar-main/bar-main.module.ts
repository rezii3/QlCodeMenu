import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BarMainRoutingModule } from './bar-main-routing.module';
import { BarComponent } from './bar/bar.component';


@NgModule({
  declarations: [
    BarComponent
  ],
  imports: [
    CommonModule,
    BarMainRoutingModule
  ]
})
export class BarMainModule { }
