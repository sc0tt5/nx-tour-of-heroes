import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { Hero } from '@nx-toh/shared/models';

import { ModalComponent } from './modal.component';

describe('ModalComponent', () => {
  let component: ModalComponent<Hero>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ModalComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    const fixture = TestBed.createComponent(ModalComponent<Hero>);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // todo: unit tests
});
