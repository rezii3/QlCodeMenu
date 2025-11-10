import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BarMainRoutingModule } from './bar-main-routing.module';
import { BarComponent } from './bar/bar.component';
import { SharedModule } from "../../shared/shared.module";


@NgModule({
  declarations: [
    BarComponent
  ],
  imports: [
    CommonModule,
    BarMainRoutingModule,
    SharedModule
]
})
export class BarMainModule { }
