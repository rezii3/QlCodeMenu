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
    path:'cocktails',
    title: 'cocktails',
    loadChildren: () => import('./features/drink/drink.module').then((m) => m.DrinkModule)
  },
  {
    path:'wine',
    title: 'wine',
    loadChildren: () => import('./features/wine/wine.module').then((m) => m.WineModule)
  },
  {
    path:'illy',
    title: 'illy',
    loadChildren: () => import('./features/illy/illy.module').then((m) => m.IllyModule)
  },
  {
    path:'salads',
    title: 'salads',
    loadChildren: () => import('./features/salad/salad.module').then((m) => m.SaladModule)
  },
  {
    path:'soups',
    title: 'soups',
    loadChildren: () => import('./features/soup/soup.module').then((m) => m.SoupModule)
  },
  {
    path:'desserts',
    title: 'desserts',
    loadChildren: () => import('./features/desert/desert.module').then((m) => m.DesertModule)
  },
  {
    path:'pizza',
    title: 'pizza',
    loadChildren: () => import('./features/pizza/pizza.module').then((m) => m.PizzaModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
