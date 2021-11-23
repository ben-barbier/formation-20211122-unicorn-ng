import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { filter, from, map } from 'rxjs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { UnicornCardComponent } from './pages/unicorn-list/unicorn-card/unicorn-card.component';
import { UnicornListComponent } from './pages/unicorn-list/unicorn-list.component';

interface Facture {
  customer: string;
  amont: number;
  payed: boolean;
}

@NgModule({
  declarations: [AppComponent, UnicornListComponent, UnicornCardComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    const facturesHT: Facture[] = [
      { customer: 'bob', amont: 10, payed: true },
      { customer: 'dylan', amont: 20, payed: false },
    ];

    from(facturesHT)
      .pipe(
        filter((facture: Facture): boolean => !facture.payed),
        map((facture: Facture): Facture => ({ ...facture, amont: facture.amont * 1.2 }))
      )
      .subscribe((e) => {
        // ICI
      });

    fetch('http://localhost:3000/unicorns')
      .then((response) => response.json())
      .then((unicorns) => {
        debugger;
      });

    debugger;
  }
}
