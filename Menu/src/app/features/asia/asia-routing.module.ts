import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsiaCardComponent } from './asia-card/asia-card.component';

const routes: Routes = [
  {
      path: 'asia-foods',
      component:AsiaCardComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsiaRoutingModule { }
