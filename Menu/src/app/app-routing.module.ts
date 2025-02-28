import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule)
  },
  {
    path:'bar',
    title: 'bar',
    loadChildren: () => import('./features/bar-main/bar-main.module').then((m) => m.BarMainModule)
  },

  {
    path:'dishes',
    title: 'dishes',
    loadChildren: () => import('./features/food/food.module').then((m) => m.FoodModule)
  },
  {
    path:'drinks',
    title: 'drinks',
    loadChildren: () => import('./features/drink/drink.module').then((m) => m.DrinkModule)
  },
  {
    path:'wine',
    title: 'wine',
    loadChildren: () => import('./features/wine/wine.module').then((m) => m.WineModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
