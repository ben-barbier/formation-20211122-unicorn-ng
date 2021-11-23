import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Unicorn } from '../../../../shared/models/unicorn.model';

@Component({
  selector: 'app-edit-unicorn-dialog',
  templateUrl: './edit-unicorn-dialog.component.html',
  styleUrls: ['./edit-unicorn-dialog.component.scss'],
})
export class EditUnicornDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { unicorn: Unicorn }, // Input
    private dialogRef: MatDialogRef<EditUnicornDialogComponent> // Output
  ) {}

  public updateUnicorn(value: Pick<Unicorn, 'name' | 'birthyear'>) {
    const result: Unicorn = { ...this.data.unicorn, ...value };
    this.dialogRef.close(result);
  }
}
