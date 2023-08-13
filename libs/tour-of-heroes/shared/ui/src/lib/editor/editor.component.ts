// prettier-ignore
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

import { FieldType, Hero } from '@nx-toh/shared/models';

@Component({
  selector: 'shrd-ui-toh-editor',
  templateUrl: './editor.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None // required to apply custom styles to form
})
export class EditorComponent implements OnInit {
  @Input() hero: Hero;

  @Output() cancel = new EventEmitter();
  @Output() edit = new EventEmitter();
  @Output() save = new EventEmitter();

  editorHeader: string;
  fieldset = [];
  formIsValid: boolean;
  heroToSave: Hero;

  set heroesFieldset(hero: Hero) {
    this.fieldset.push(
      {
        name: 'name',
        type: FieldType.TEXTFIELD,
        label: 'Name',
        placeholder: 'Hero name',
        value: hero ? hero.name : null,
        required: true
      },
      {
        name: 'rating',
        type: FieldType.NUMBER,
        label: 'Rating',
        placeholder: 'Hero rating',
        value: hero ? hero.rating : null,
        required: true
      }
    );
  }

  ngOnInit(): void {
    this.editorHeader = this.hero ? this.hero.name : 'Create a new hero';
    this.heroesFieldset = this.hero;
    this.heroToSave = { ...this.heroToSave, ...this.hero };
  }

  closeEditor(): void {
    this.cancel.emit();
  }

  editHero(hero: Hero): void {
    this.heroToSave = { ...this.heroToSave, ...hero };
    this.edit.emit(this.heroToSave);
    this.editorHeader = hero.name || this.editorHeader;
  }

  saveHero(): void {
    this.save.emit();
  }

  setFormValidation(valid: boolean): void {
    this.formIsValid = valid;
  }
}
