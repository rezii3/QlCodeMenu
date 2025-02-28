import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { MainComponent } from './main/main.component';
import { BarComponent } from './bar/bar.component';


@NgModule({
  declarations: [
    MainComponent,
    BarComponent
  ],
  exports: [
    MainComponent,
    BarComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
