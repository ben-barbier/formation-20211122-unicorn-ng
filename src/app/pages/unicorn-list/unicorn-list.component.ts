import { Component, OnInit } from '@angular/core';
import { Unicorn } from '../../shared/models/unicorn.model';
import { UnicornsService } from '../../shared/services/unicorns.service';

@Component({
  selector: 'app-unicorn-list',
  templateUrl: './unicorn-list.component.html',
  styleUrls: ['./unicorn-list.component.scss'],
})
export class UnicornListComponent implements OnInit {
  public unicorns: Unicorn[] = [];

  constructor(private unicornsService: UnicornsService) {}

  ngOnInit(): void {
    this.unicornsService.getAll().subscribe((unicorns: Unicorn[]) => {
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
