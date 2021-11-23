import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Unicorn } from '../models/unicorn.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cart$ = new BehaviorSubject<Unicorn[]>([]);

  public addToCart(unicorn: Unicorn): void {
    const actualCart = this.cart$.getValue();
    const newCart = actualCart.concat(unicorn);
    this.cart$.next(newCart);
  }
}
