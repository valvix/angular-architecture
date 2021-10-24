import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {
  public cartItemsCount: number = 0;
  
  private shoppingCartSub!: Subscription;

  constructor(private readonly shoppingCartService: ShoppingCartService) { }


  ngOnInit(): void {
    this.shoppingCartSub = this.shoppingCartService.shoppingCartChanged$.subscribe((itemsInCart) => {
      this.cartItemsCount = itemsInCart;
    });
  }

  ngOnDestroy(): void {
    this.shoppingCartSub.unsubscribe();
  }

}
