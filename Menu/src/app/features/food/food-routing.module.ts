import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodCardComponent } from './food-card/food-card.component';

const routes: Routes = [
   {path: '',
    component: FoodCardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodRoutingModule { }
