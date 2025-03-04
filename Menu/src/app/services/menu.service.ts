import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MenuItem } from '../interface/menu-model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private _http: HttpClient) { }
  dishes: string = 'https://localhost:7102/api/FoodContoller/Get-Food';

  getDishes(){
    return this._http.get<MenuItem[]>(this.dishes);
  }
  
}
