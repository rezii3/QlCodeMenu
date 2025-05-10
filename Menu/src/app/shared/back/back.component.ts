import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-back',
  standalone: false,
  templateUrl: './back.component.html',
  styleUrl: './back.component.scss'
})
export class BackComponent {
  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }
}
