import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PizzaCardComponent } from './pizza-card/pizza-card.component';

const routes: Routes = [
  {
    path: 'pizza',
    component:PizzaCardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PizzaRoutingModule { }
