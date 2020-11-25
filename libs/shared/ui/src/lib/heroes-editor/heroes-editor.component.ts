// prettier-ignore
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Hero } from '@nx-demo/shared/models';
import { Field, FieldType } from '@nx-demo/shared/models';

@Component({
  selector: 'nx-demo-heroes-editor',
  templateUrl: './heroes-editor.component.html',
  styleUrls: ['./heroes-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroesEditorComponent implements OnInit {
  @Input() hero: Hero;
  @Output() cancel = new EventEmitter();
  @Output() save = new EventEmitter();

  fieldset: Field[];
  heroToSave: Hero;

  ngOnInit(): void {
    this.heroesFieldset = this.hero;
    this.heroToSave = { ...this.heroToSave, ...this.hero };
  }

  closeEditor(): void {
    this.cancel.emit();
  }

  saveHero(): void {
    this.save.emit(this.heroToSave);
  }

  updateHeroToSave(hero: Hero): void {
    this.heroToSave = { ...this.heroToSave, ...hero };
  }

  private set heroesFieldset(hero: Hero) {
    this.fieldset = [
      {
        name: 'name',
        type: FieldType.TEXTFIELD,
        placeholder: 'Name',
        value: hero.name,
        required: true
      },
      {
        name: 'description',
        type: FieldType.TEXTFIELD,
        placeholder: 'Description',
        value: hero.description,
        required: true
      }
    ];
  }
}
