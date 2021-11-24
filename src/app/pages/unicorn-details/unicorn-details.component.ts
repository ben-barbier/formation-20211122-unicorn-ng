import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { interval, mergeMap, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Unicorn } from '../../shared/models/unicorn.model';
import { UnicornsService } from '../../shared/services/unicorns.service';

@UntilDestroy()
@Component({
  selector: 'app-unicorn-details',
  templateUrl: './unicorn-details.component.html',
  styleUrls: ['./unicorn-details.component.scss'],
})
export class UnicornDetailsComponent {
  public unicorn$: Observable<Unicorn>;

  constructor(unicornService: UnicornsService, route: ActivatedRoute) {
    this.unicorn$ = route.params.pipe(
      // params
      map((params: Params) => params['id']),
      // unicornId
      mergeMap((unicornId: number) => {
        return unicornService.get(unicornId);
      }),
      // unicorn
      untilDestroyed(this)
    );

    interval(1000)
      .pipe(
        map(() => new Date()),
        untilDestroyed(this)
      )
      .subscribe((time) => {
        console.count('sub');
      });
  }
}
