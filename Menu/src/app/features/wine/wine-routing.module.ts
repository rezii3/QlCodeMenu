import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WineCardComponent } from './wine-card/wine-card.component';

const routes: Routes = [
  {path: 'wine',
      component: WineCardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WineRoutingModule { }
