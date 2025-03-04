import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesertCardsComponent } from './desert-cards/desert-cards.component';

const routes: Routes = [
    {
      path: 'desserts',
     component: DesertCardsComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesertRoutingModule { }
