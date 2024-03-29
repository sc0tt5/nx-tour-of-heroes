import { NgFor, NgIf, NgSwitch, NgSwitchCase } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroupDirective, ReactiveFormsModule, UntypedFormControl } from '@angular/forms';

import { Field, FieldType } from '@nx-toh/shared/models';

// kudos to Bonnie (https://github.com/bcarson/dynamic-reactive-form)

@Component({
  standalone: true,
  imports: [NgFor, NgIf, NgSwitch, NgSwitchCase, ReactiveFormsModule],
  selector: 'shrd-ui-field',
  templateUrl: './dynamic-field.component.html',
  styleUrls: ['./dynamic-field.component.scss']
})
export class DynamicFieldComponent implements OnInit {
  @Input() field: Field;
  public control: UntypedFormControl;
  public FieldType = FieldType;

  constructor(private readonly formGroupDir: FormGroupDirective) {}

  ngOnInit(): void {
    /**
     * @angular/forms -> FormGroupDirective! 🎉
     *
     * https://angular.io/api/forms/FormGroupDirective
     * "Binds an existing FormGroup to a DOM element."
     *
     * We can easily access Reactive Forms functionality from this component in our
     * parent component without the need to pass our own inputs or event emitters.
     */
    this.control = this.formGroupDir.control.get(this.field.name) as UntypedFormControl;
  }
}
