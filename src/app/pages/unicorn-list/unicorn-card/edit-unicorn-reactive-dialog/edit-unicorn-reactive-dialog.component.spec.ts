import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUnicornReactiveDialogComponent } from './edit-unicorn-reactive-dialog.component';

describe('EditUnicornReactiveDialogComponent', () => {
  let component: EditUnicornReactiveDialogComponent;
  let fixture: ComponentFixture<EditUnicornReactiveDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditUnicornReactiveDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUnicornReactiveDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
