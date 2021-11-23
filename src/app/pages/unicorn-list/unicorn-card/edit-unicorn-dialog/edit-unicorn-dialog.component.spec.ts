import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUnicornDialogComponent } from './edit-unicorn-dialog.component';

describe('EditUnicornDialogComponent', () => {
  let component: EditUnicornDialogComponent;
  let fixture: ComponentFixture<EditUnicornDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditUnicornDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUnicornDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
