import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormGroupDirective, ReactiveFormsModule } from '@angular/forms';

import { FieldType } from '@nx-toh/shared/models';

import { DynamicFieldComponent } from './dynamic-field.component';

describe('DynamicFieldComponent', () => {
  const fb = new FormBuilder();

  let component: DynamicFieldComponent;
  let fixture: ComponentFixture<DynamicFieldComponent>;
  const formGroupDirective = new FormGroupDirective([], []);
  formGroupDirective.form = fb.group({
    test: fb.control('test')
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [DynamicFieldComponent],
      providers: [FormGroupDirective, { provide: FormGroupDirective, useValue: formGroupDirective }],
      teardown: { destroyAfterEach: false }
    }).compileComponents();

    fixture = TestBed.createComponent(DynamicFieldComponent);
    component = fixture.componentInstance;
    component.field = { name: 'test', type: FieldType.TEXTFIELD };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
