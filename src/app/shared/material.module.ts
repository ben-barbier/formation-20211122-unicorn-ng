import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

const matModules = [CommonModule, MatIconModule, MatCardModule, MatDialogModule, MatFormFieldModule, MatButtonModule, MatInputModule];

@NgModule({
  declarations: [],
  imports: [...matModules],
  exports: [...matModules],
})
export class MaterialModule {}
