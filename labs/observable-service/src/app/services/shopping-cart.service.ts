import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private itemsInCart = 0;
  private shoppingCartSubject$ = new Subject<number>();
  public shoppingCartChanged$ = this.shoppingCartSubject$.asObservable();

  constructor() { }

  public addToCart() {
    this.itemsInCart += 1;
    this.shoppingCartSubject$.next(this.itemsInCart);
  }
}
