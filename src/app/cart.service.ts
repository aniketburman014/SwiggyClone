import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface CartItem {
  restaurantName: string;
  itemName: string;
  price: number;
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: CartItem[] = this.loadCartFromStorage();
  private cartSubject = new BehaviorSubject<CartItem[]>(this.cart);

  cart$ = this.cartSubject.asObservable();

  private loadCartFromStorage(): CartItem[] {
    const cartData = localStorage.getItem('cart');
    if (cartData) {
      return JSON.parse(cartData);
    }
    return [];
  }

  private saveCartToStorage() {
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  addToCart(item: CartItem): void {
    const index = this.cart.findIndex(
      (cartItem) => cartItem.itemName === item.itemName && cartItem.restaurantName === item.restaurantName
    );
    if (index >= 0) {
      this.cart[index].quantity += item.quantity;
    } else {
      this.cart.push(item);
    }
    this.saveCartToStorage();
    this.cartSubject.next(this.cart); // Emit updated cart
  }

  getCartItems(): CartItem[] {
    return this.cart;
  }

  getTotalAmount(): number {
    return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  getTotalQuantity(): number {
    return this.cart.reduce((total, item) => total + item.quantity, 0);
  }
  clearCart(): void {
    this.cart = []; // Reset the cart array
    this.saveCartToStorage(); // Save empty cart to localStorage
    this.cartSubject.next([...this.cart]); // Emit empty cart to subscribers
  }
}
