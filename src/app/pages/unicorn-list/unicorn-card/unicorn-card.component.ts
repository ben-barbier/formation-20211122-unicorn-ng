import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Unicorn } from '../../../shared/models/unicorn.model';
import { CartService } from '../../../shared/services/cart.service';
import { EditUnicornDialogComponent } from './edit-unicorn-dialog/edit-unicorn-dialog.component';
import { EditUnicornReactiveDialogComponent } from './edit-unicorn-reactive-dialog/edit-unicorn-reactive-dialog.component';

@Component({
  selector: 'app-unicorn-card',
  templateUrl: './unicorn-card.component.html',
  styleUrls: ['./unicorn-card.component.scss'],
})
export class UnicornCardComponent implements OnChanges, OnInit, OnDestroy {
  @Input() public unicorn!: Unicorn;
  @Output() public deleted = new EventEmitter<void>();
  @Output() public updated = new EventEmitter<Unicorn>();

  public isOld = false;
  public age = 0;

  constructor(private cartService: CartService, private dialog: MatDialog) {
    console.log('constructor');
    // ICI, les Inputs ne sont pas renseignés ( === undefined)
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    const currentYear = new Date().getFullYear();
    const unicornAge = currentYear - this.unicorn.birthyear;
    this.isOld = unicornAge > 60;
    this.age = this.getAge(this.unicorn);
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  public deleteUnicorn(): void {
    this.deleted.emit();
  }

  public addToCart(): void {
    this.cartService.addToCart(this.unicorn);
  }

  public editUnicorn(): void {
    this.dialog
      .open(EditUnicornDialogComponent, {
        data: {
          unicorn: this.unicorn,
        },
      })
      .afterClosed()
      .subscribe((unicorn: Unicorn) => {
        this.updated.emit(unicorn);
      });
  }

  public editUnicornReactive(): void {
    this.dialog
      .open(EditUnicornReactiveDialogComponent, {
        data: {
          unicorn: this.unicorn,
        },
      })
      .afterClosed()
      .subscribe((unicorn: Unicorn) => {
        this.updated.emit(unicorn);
      });
  }

  private getAge(unicorn: Unicorn): number {
    return new Date().getFullYear() - unicorn.birthyear;
  }
}
