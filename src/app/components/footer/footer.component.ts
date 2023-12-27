import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  year!: number

  constructor(private router:Router) {
    // Get the current year
    const currentDate = new Date();
    this.year = currentDate.getFullYear();
  }

  hasRoute(route: string) {
    return this.router.url == route
  }

  getLink(): string {
    return this.hasRoute('/about') ? '/' : '/about';
  }

}
