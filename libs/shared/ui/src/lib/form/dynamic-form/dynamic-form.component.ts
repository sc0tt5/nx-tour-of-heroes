import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

import { Field } from '@nx-toh/shared/models';

// kudos to Bonnie (https://github.com/bcarson/dynamic-reactive-form)

@Component({
  selector: 'shrd-ui-form',
  templateUrl: './dynamic-form.component.html'
})
export class DynamicFormComponent implements OnInit, OnDestroy {
  @Input() fieldset: Field[];
  @Input() readOnly = false;

  @Output() formValues = new EventEmitter();
  @Output() formIsValid = new EventEmitter();

  public form: UntypedFormGroup;
  public formReady = false;

  private unsubscribe$: Subject<void> = new Subject<void>();

  constructor(private formBuilder: UntypedFormBuilder) {}

  ngOnInit(): void {
    if (this.fieldset) {
      this.initializeForm();
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private initializeForm(): void {
    this.form = this.formBuilder.group({});

    this.fieldset.forEach((field: Field) => {
      this.form.addControl(field.name, this.initializeFormControl(field));
    });

    // eslint-disable-next-line rxjs-angular/prefer-async-pipe
    this.form.valueChanges.pipe(debounceTime(100), takeUntil(this.unsubscribe$)).subscribe(data => {
      this.formValues.emit(data);
      this.formIsValid.emit(this.form.valid);
    });

    this.formReady = true;
  }

  private initializeFormControl(field: Field): UntypedFormControl {
    const value: number | string = field.value;
    const validators = field.required ? Validators.required : [];
    const disabled = field.disabled || this.readOnly ? true : false;
    return this.formBuilder.control({ value, disabled }, validators);
  }
}
