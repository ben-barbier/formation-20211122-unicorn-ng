import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Unicorn } from '../../shared/models/unicorn.model';
import { UnicornsService } from '../../shared/services/unicorns.service';

@UntilDestroy()
@Component({
  selector: 'app-unicorn-list',
  templateUrl: './unicorn-list.component.html',
  styleUrls: ['./unicorn-list.component.scss'],
})
export class UnicornListComponent implements OnInit {
  public unicorns: Unicorn[] = [];
  public trackById = (index: number, unicorn: Unicorn) => unicorn.id;

  constructor(private unicornsService: UnicornsService) {}

  ngOnInit(): void {
    this.unicornsService
      .getAll()
      .pipe(untilDestroyed(this))
      .subscribe((unicorns: Unicorn[]) => {
        this.unicorns = unicorns;
      });
  }

  public removeUnicornFromList(unicorn: Unicorn): void {
    this.unicorns = this.unicorns.filter((u: Unicorn) => u.id !== unicorn.id);
  }

  public updateUnicornFromList(unicorn: Unicorn): void {
    this.unicorns = this.unicorns.map((u) => (u.id === unicorn.id ? unicorn : u));
  }

  getInfo() {
    console.count('getInfo');
    return 'info !!!!';
  }
}
