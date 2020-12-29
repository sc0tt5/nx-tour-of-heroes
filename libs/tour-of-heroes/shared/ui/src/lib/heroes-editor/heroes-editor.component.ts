// prettier-ignore
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

import { Hero } from '@nx-toh/shared/models';
import { Field, FieldType } from '@nx-toh/shared/models';

@Component({
  selector: 'shrd-ui-toh-editor',
  templateUrl: './heroes-editor.component.html',
  styleUrls: ['./heroes-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None // required to apply custom styles to form
})
export class HeroesEditorComponent implements OnInit {
  @Input() hero: Hero;
  @Output() cancel = new EventEmitter();
  @Output() edit = new EventEmitter();
  @Output() save = new EventEmitter();

  editorHeader: string;
  fieldset = [];
  heroToSave: Hero;

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

  private set heroesFieldset(hero: Hero) {
    // hero-detail, show id, exclude for hero-new
    if (hero) {
      this.fieldset.push({
        name: 'id',
        type: FieldType.TEXTFIELD,
        label: 'id:',
        value: hero ? hero.id : null,
        disabled: true
      });
    }

    this.fieldset.push(
      {
        name: 'name',
        type: FieldType.TEXTFIELD,
        label: 'name:',
        placeholder: 'hero name',
        value: hero ? hero.name : null,
        required: true
      },
      {
        name: 'rating',
        type: FieldType.NUMBER,
        label: 'rating:',
        placeholder: 'hero rating',
        value: hero ? hero.rating : null,
        required: true
      }
    );
  }
}
