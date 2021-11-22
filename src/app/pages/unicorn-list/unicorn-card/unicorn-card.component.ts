import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { Unicorn } from '../../../shared/models/unicorn.model';

@Component({
  selector: 'app-unicorn-card',
  templateUrl: './unicorn-card.component.html',
  styleUrls: ['./unicorn-card.component.scss'],
})
export class UnicornCardComponent implements OnChanges, OnInit, OnDestroy {
  @Input() public unicorn!: Unicorn;
  @Output() public deleted = new EventEmitter<void>();

  constructor() {
    console.log('constructor');
    // ICI, les Inputs ne sont pas renseignés ( === undefined)
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  public deleteUnicorn(): void {
    this.deleted.emit();
  }
}
