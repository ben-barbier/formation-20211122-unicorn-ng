import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Unicorn } from '../../shared/models/unicorn.model';
import { UnicornsService } from '../../shared/services/unicorns.service';

@Component({
  selector: 'app-unicorn-details',
  templateUrl: './unicorn-details.component.html',
  styleUrls: ['./unicorn-details.component.scss'],
})
export class UnicornDetailsComponent {
  public unicorn?: Unicorn;

  constructor(unicornService: UnicornsService, route: ActivatedRoute) {
    route.params.subscribe((params: Params) => {
      unicornService.get(params['id']).subscribe((unicorn) => (this.unicorn = unicorn));
    });
  }
}
