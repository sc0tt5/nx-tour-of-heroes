// prettier-ignore
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

import { Field } from '@nx-toh/shared/models';

// kudos to Bonnie (https://github.com/bcarson/dynamic-reactive-form)

@Component({
  selector: 'shrd-ui-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit, OnDestroy {
  @Input() fieldset: Field[];
  @Input() readOnly = false;
  @Output() formValues = new EventEmitter();

  public form: FormGroup;
  public formReady = false;

  private unsubscribe$: Subject<void> = new Subject<void>();

  constructor(private formBuilder: FormBuilder) {}

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

    this.form.valueChanges
      .pipe(debounceTime(100))
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(data => {
        this.formValues.emit(data);
      });

    this.formReady = true;
  }

  private initializeFormControl(field: Field): FormControl {
    const value = field.value;
    const validators = field.required ? Validators.required : [];
    const disabled = field.disabled || this.readOnly ? true : false;
    return this.formBuilder.control({ value, disabled }, validators);
  }
}
