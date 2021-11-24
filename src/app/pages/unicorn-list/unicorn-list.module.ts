import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { EditUnicornDialogComponent } from './unicorn-card/edit-unicorn-dialog/edit-unicorn-dialog.component';
import { EditUnicornReactiveDialogComponent } from './unicorn-card/edit-unicorn-reactive-dialog/edit-unicorn-reactive-dialog.component';
import { UnicornCardComponent } from './unicorn-card/unicorn-card.component';
import { UnicornListComponent } from './unicorn-list.component';

const routes: Routes = [{ path: '', component: UnicornListComponent }];

@NgModule({
  declarations: [UnicornListComponent, UnicornCardComponent, EditUnicornDialogComponent, EditUnicornReactiveDialogComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class UnicornListModule {}
