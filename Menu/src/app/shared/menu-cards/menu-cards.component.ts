import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-menu-cards',
  standalone: false,
  templateUrl: './menu-cards.component.html',
  styleUrl: './menu-cards.component.scss'
})
export class MenuCardsComponent {
  @Input() name!: string;
  @Input() description!: string;
  @Input() price!: number;
  @Input() image!: string;
}
