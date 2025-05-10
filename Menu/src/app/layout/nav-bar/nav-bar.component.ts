import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav-bar',
  standalone: false,
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  language = 'English';
  showBackButton: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      const currentUrl = this.router.url;
      // შეცვალე ეს მისამართები, როგორც საჭიროა
      this.showBackButton = !['/', '/bar'].includes(currentUrl);
    });
  }

  goBack() {
    window.history.back();
  }
}
