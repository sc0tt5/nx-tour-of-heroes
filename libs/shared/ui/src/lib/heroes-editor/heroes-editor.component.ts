// prettier-ignore
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Field, FieldType } from '@nx-demo/shared/models';

@Component({
  selector: 'nx-demo-heroes-editor',
  templateUrl: './heroes-editor.component.html',
  styleUrls: ['./heroes-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroesEditorComponent implements OnInit {
  @Input() name: string;
  @Input() description: string;
  @Output() selected = new EventEmitter();

  fieldset: Field[];

  private set heroesFieldset({ name, description }) {
    this.fieldset = [
      {
        name: 'firstName',
        type: FieldType.TEXTFIELD,
        placeholder: 'Name',
        value: name,
        required: true
      },
      {
        name: 'description',
        type: FieldType.TEXTFIELD,
        placeholder: 'Description',
        value: description,
        required: true
      }
    ];
  }

  ngOnInit(): void {
    this.heroesFieldset = { name: this.name, description: this.description };
  }
}
