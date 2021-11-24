import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Unicorn } from '../../../../shared/models/unicorn.model';

@Component({
  selector: 'app-edit-unicorn-reactive-dialog',
  templateUrl: './edit-unicorn-reactive-dialog.component.html',
  styleUrls: ['./edit-unicorn-reactive-dialog.component.scss'],
})
export class EditUnicornReactiveDialogComponent {
  public unicornForm: FormGroup;

  constructor(
    fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: { unicorn: Unicorn }, // Input
    private dialogRef: MatDialogRef<EditUnicornReactiveDialogComponent> // Output
  ) {
    this.unicornForm = fb.group({
      name: [data.unicorn.name, [Validators.required]], // 1 FormControl
      birthyear: [data.unicorn.birthyear, [Validators.required, Validators.min(1800)]], // 1 FormControl
    });
  }

  public updateUnicorn(value: Pick<Unicorn, 'name' | 'birthyear'>) {
    const result: Unicorn = { ...this.data.unicorn, ...value };
    this.dialogRef.close(result);
  }
}
