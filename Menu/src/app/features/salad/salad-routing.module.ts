import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaladCardsComponent } from './salad-cards/salad-cards.component';

const routes: Routes = [
    {
      path: 'salads',
     component: SaladCardsComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaladRoutingModule { }
