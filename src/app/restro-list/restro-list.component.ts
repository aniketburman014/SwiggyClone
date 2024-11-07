import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { Router } from '@angular/router'
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-restro-list',
  standalone: true,
  imports: [HeaderComponent,CommonModule],
  templateUrl: './restro-list.component.html',
  styleUrl: './restro-list.component.scss'
})
export class RestroListComponent {
  restaurants = [
    {
      id: 1,
      name: 'The Italian Place',
      image: 'assets/images/little-italy.webp'
    },
    {
      id: 2,
      name: 'Sushi World',
      image: 'assets/images/dugout.webp'
    },
    {
      id: 3,
      name: 'Mexican Fiesta',
      image: 'assets/images/little-italy.webp'
    },
    {
      id: 4,
      name: 'Burger Kingdom',
      image: 'assets/images/dugout.webp'
    },
    {
      id: 5,
      name: 'Indian Spice House',
      image: 'assets/images/little-italy.webp'
    }
  ];

  constructor(private router: Router) {}

  viewMenu(restaurantId: number) {
    this.router.navigate(['/order', restaurantId]);
  }
}
