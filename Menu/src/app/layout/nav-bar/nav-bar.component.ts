import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  standalone: false,
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  language = 'English';
  
  activeSection: 'food' | 'drinks' = 'food';

  showFood() {
    this.activeSection = 'food';
  }

  showDrinks() {
    this.activeSection = 'drinks';
  }
}
