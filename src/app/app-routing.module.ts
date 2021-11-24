import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnicornDetailsComponent } from './pages/unicorn-details/unicorn-details.component';
import { EvenGuard } from './shared/guards/even.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/unicorn-list/unicorn-list.module').then((m) => m.UnicornListModule),
  },
  {
    path: 'unicorn/:id',
    component: UnicornDetailsComponent,
    canActivate: [EvenGuard],
  },
  {
    path: 'super-admin',
    loadChildren: () => import('./pages/super-admin/super-admin.module').then((m) => m.SuperAdminModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
