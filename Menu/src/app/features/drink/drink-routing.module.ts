import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrinkCardComponent } from './drink-card/drink-card.component';

const routes: Routes = [
  {path: '',
      component: DrinkCardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DrinkRoutingModule { }
