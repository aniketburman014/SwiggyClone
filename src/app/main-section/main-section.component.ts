import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-section',
  standalone: true,
  imports: [],
  templateUrl: './main-section.component.html',
  styleUrl: './main-section.component.scss'
})
export class MainSectionComponent {
  constructor(private router: Router) {}

  openRestaurantList() {
    this.router.navigate(['/restaurant']);
  }
}


