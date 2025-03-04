import { Component } from '@angular/core';
import { MenuService } from '../../../services/menu.service';
import { MenuItem } from '../../../interface/menu-model';

@Component({
  selector: 'app-food-card',
  standalone: false,
  templateUrl: './food-card.component.html',
  styleUrl: './food-card.component.scss'
})
export class FoodCardComponent {

  dishes:MenuItem [] = []

  constructor(private _menuService: MenuService) {
    this._menuService.getDishes().subscribe(response => {
      console.log(response);
      this.dishes = response;
    });
  }
}
