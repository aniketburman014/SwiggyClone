import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Restaurant {
  name: string;
  cuisine: string;
  cost: string;
  location: string;
  distance: string;
  rating: number;
  image: string;
  offers: string[];
}
@Component({
  selector: 'app-restro-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './restro-card.component.html',
  styleUrl: './restro-card.component.scss'
})
export class RestroCardComponent {
  restaurants: Restaurant[] = [
    {
      name: 'Little Italy',
      cuisine: 'Italian',
      cost: '₹500 for two',
      location: 'Lemon Tree Hotel, Bistupur, Jamshedpur',
      distance: '1.1 km',
      rating: 4.2,
      image: 'assets/images/little-italy.webp',
      offers: ['Flat 20% off on pre-booking', 'Up to 15% off with bank offers']
    },
    {
      name: 'Aurous Restro Lounge',
      cuisine: 'North Indian • Oriental',
      cost: '₹750 for two',
      location: 'Shangrilla Tower, Bistupur, Jamshedpur',
      distance: '2.1 km',
      rating: 4.2,
      image: 'assets/images/aurous-lounge.webp',
      offers: ['Flat 15% off on pre-booking', 'Up to 15% off with bank offers']
    },
    {
      name: 'Dugout Restaurant & Bar',
      cuisine: 'North Indian • South Indian',
      cost: '₹1000 for two',
      location: 'Sakchi, Jamshedpur',
      distance: '2.6 km',
      rating: 4.1,
      image: 'assets/images/dugout.webp',
      offers: ['Flat 10% off on pre-booking', 'Up to 10% off with bank offers']
    },
    
  ];
}
