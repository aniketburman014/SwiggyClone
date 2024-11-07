import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartService } from '../cart.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-checkout',
  standalone: true,
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
  imports: [CommonModule],
})
export class CheckoutComponent implements OnInit, OnDestroy {
  cartItems: any[] = [];
  totalAmount: number = 0;
  cartSubscription!: Subscription;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    // Subscribe to cart updates
    this.cartSubscription = this.cartService.cart$.subscribe(cart => {
      console.log('Cart updated:', cart); // Log to check if cart updates correctly
      this.cartItems = cart;
      this.totalAmount = this.cartService.getTotalAmount();
    });
  }

  checkout() {
    // Checkout logic (e.g., call payment API, etc.)
    this.cartService.clearCart();
    alert('Checkout initiated');
  }

  ngOnDestroy(): void {
    // Clean up subscription when component is destroyed
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }
}
