import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-food-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './food-menu.component.html',
  styleUrl: './food-menu.component.scss'
})
export class FoodMenuComponent {
  foodItems = [
    { name: 'Biryani', image: 'assets/images/Biryani.avif' },
    { name: 'Pizza', image: 'assets/images/Pizza.avif' },
    { name: 'North Indian', image: 'assets/images/North.avif' },
    { name: 'Burger', image: 'assets/images/Burger.avif' },
    { name: 'Dosa', image: 'assets/images/Dosa.avif' },
    { name: 'Chinese', image: 'assets/images/Chinese.avif' },
    { name: 'Cake', image: 'assets/images/Cake.avif' }
  ];
}
