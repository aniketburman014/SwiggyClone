import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { HeaderComponent } from "../header/header.component";  // Import the CartService
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-component',
  standalone: true,  // Keep the component standalone
  providers: [CartService],  // Provide CartService explicitly
  templateUrl: './order-component.component.html',
  styleUrls: ['./order-component.component.scss'],
  imports: [HeaderComponent,CommonModule]
})
export class OrderComponentComponent implements OnInit {
  restaurantId: number | null = null;
  restaurantName: string = '';
  menuItems: { name: string; price: number }[] = [];

  mockOrders: Record<number, { name: string; menu: { name: string; price: number }[] }> = {
    1: { name: 'The Italian Place', menu: [{ name: 'Spaghetti', price: 12 }, { name: 'Lasagna', price: 15 }] },
    2: { name: 'Sushi World', menu: [{ name: 'Salmon Roll', price: 8 }, { name: 'Tuna Sashimi', price: 10 }] },
    3: { name: 'Mexican Fiesta', menu: [{ name: 'Tacos', price: 7 }, { name: 'Burrito', price: 10 }] },
    4: { name: 'Burger Kingdom', menu: [{ name: 'Cheeseburger', price: 9 }, { name: 'Fries', price: 3 }] },
    5: { name: 'Indian Spice House', menu: [{ name: 'Chicken Curry', price: 13 }, { name: 'Naan', price: 2 }] }
  };

  constructor(private route: ActivatedRoute, private cartService: CartService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.restaurantId = id ? +id : null;

      if (this.restaurantId && this.mockOrders[this.restaurantId]) {
        const restaurantData = this.mockOrders[this.restaurantId];
        this.restaurantName = restaurantData.name;
        this.menuItems = restaurantData.menu;
      } else {
        this.restaurantName = 'Restaurant not found';
      }
    });
  }

  // Add to cart functionality
  addToCart(itemName: string, price: number): void {
    const cartItem = {
      restaurantName: this.restaurantName,
      itemName: itemName,
      price: price,
      quantity: 1,
    };
    this.cartService.addToCart(cartItem);
  }
}
