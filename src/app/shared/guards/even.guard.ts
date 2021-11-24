import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Unicorn } from '../models/unicorn.model';
import { UnicornsService } from '../services/unicorns.service';

@Injectable({
  providedIn: 'root',
})
export class EvenGuard implements CanActivate {
  constructor(private unicornsService: UnicornsService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<true | UrlTree> {
    const id = route.params['id'];

    return this.unicornsService.get(id).pipe(
      map((unicorn: Unicorn): number => new Date().getFullYear() - unicorn.birthyear),
      map((age: number): boolean => age % 2 === 0),
      map((isEven: boolean): true | UrlTree => (isEven ? true : this.router.createUrlTree([''])))
    );
  }
}
