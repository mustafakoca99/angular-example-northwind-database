import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { cartItems } from '../models/cartItems';
import { CartItem } from '../models/cartItem';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  addToCart(product: Product) {
    let item = cartItems.find((x) => x.product.productId == product.productId);
    if (item) {
      item.quantity += 1;
    } else {
      let cartItem = new CartItem();
      cartItem.product = product;
      cartItem.quantity = 1;
      cartItems.push(cartItem);
    }
  }

  list(): CartItem[] {
    return cartItems;
  }
}
