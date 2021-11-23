import { Component } from '@angular/core';
import { Unicorn } from '../../shared/models/unicorn.model';
import { CartService } from '../../shared/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public cart: Unicorn[] = [];

  constructor(cartService: CartService) {
    cartService.cart$.subscribe((newCart) => (this.cart = newCart));
  }
}
