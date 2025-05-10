import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { MenuCardsComponent } from './menu-cards/menu-cards.component';
import { NzImageModule } from 'ng-zorro-antd/image';
import { BackComponent } from './back/back.component';


@NgModule({
  declarations: [
    MenuCardsComponent,
    BackComponent
  ],
  exports: [
    MenuCardsComponent,
    BackComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    NzImageModule
  ]
})
export class SharedModule { }
