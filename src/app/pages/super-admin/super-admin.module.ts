import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { SuperAdminComponent } from './super-admin.component';

const routes: Routes = [{ path: '', component: SuperAdminComponent }];

@NgModule({
  declarations: [SuperAdminComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class SuperAdminModule {}
