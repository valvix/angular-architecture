import { Component } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
})
export class ProductsComponent {

  constructor(private readonly shoppingCartService: ShoppingCartService) { }

  public addToCart(): void {
    this.shoppingCartService.addToCart();
  }
}
