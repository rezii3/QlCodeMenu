import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SoupCardsComponent } from './soup-cards/soup-cards.component';

const routes: Routes = [
  {
    path: 'soups',
   component: SoupCardsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SoupRoutingModule { }
