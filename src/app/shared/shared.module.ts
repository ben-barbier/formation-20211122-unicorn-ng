import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule],
  exports: [MaterialModule, FormsModule, ReactiveFormsModule],
})
export class SharedModule {}
