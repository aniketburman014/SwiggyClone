import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';  // Import Router for navigation
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, LoginComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {
  showLogin = false;
  isLoggedIn = false;
  cartQuantity: number = 0;
  cartSubscription!: Subscription;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit() {
    // Subscribe to the cart observable to get real-time updates
    this.cartSubscription = this.cartService.cart$.subscribe(cart => {
      this.cartQuantity = this.cartService.getTotalQuantity(); // Update cart quantity
    });
  }

  toggleLoginPopup() {
    if (this.isLoggedIn) {
      this.showLogin = false;
    } else {
      this.showLogin = !this.showLogin;
    }
  }

  onLoginComplete() {
    this.isLoggedIn = true;
    this.showLogin = false;
  }

  ngOnDestroy() {
    this.cartSubscription.unsubscribe();  // Unsubscribe from the observable to avoid memory leaks
  }

  // Navigate to the checkout page when the cart icon is clicked
  goToCheckout() {
    this.router.navigate(['/checkout']); // Navigate to the checkout page
  }
}
