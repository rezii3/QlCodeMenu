import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IllyCardsComponent } from './illy-cards/illy-cards.component';

const routes: Routes = [
    {
      path: 'illy',
     component: IllyCardsComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IllyRoutingModule { }
