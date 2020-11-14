/* import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { Hero } from '@nx-demo/shared/models';

import { initialState, HeroesState } from './heroes.reducer';
import { heroesSelectors } from './heroes.selectors';

@Component({
  template: ` <div>{{ (heroes$ | async)?.name }}</div> `
})
export class MockComponent {
  heroes$ = this.store.select(heroesSelectors.getHeroes);

  constructor(private store: Store<HeroesState>) {}
}

describe('Heroes Selectors', () => {
  let fixture: ComponentFixture<MockComponent>;
  let store: MockStore<HeroesState>;
  let heroes: Hero[];
  const queryDivText = () =>
    fixture.debugElement.queryAll(By.css('div'))[0].nativeElement.textContent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MockComponent],
      providers: [provideMockStore({ initialState })]
    });

    fixture = TestBed.createComponent(MockComponent);
    store = TestBed.inject(Store) as MockStore<HeroesState>;

    // mock page and setup selector with overrideSelector
    heroes = { name: 'test', content: null, param: null, accordionItems: [] };
    store.overrideSelector(heroesSelectors.getHeroes, page);
    store.overrideSelector(heroesSelectors.getHeroesLoaded, true);
    store.overrideSelector(heroesSelectors.getHeroesLoading, false);

    fixture.detectChanges();
  });

  describe('getHeroes', () => {
    it('should return the page content', () => {
      store.select(heroesSelectors.getHeroes).subscribe(result => expect(result).toBe(page));
    });

    it('should display the page name', () => {
      expect(queryDivText()).toBe(heroes.name);
    });
  });

  describe('getHeroesLoaded', () => {
    it('should return the page loaded state', () => {
      store
        .select(heroesSelectors.getHeroesLoaded)
        .subscribe(result => expect(result).toBeTruthy());
    });
  });

  describe('getHeroesLoading', () => {
    it('should return the page loading state', () => {
      store
        .select(heroesSelectors.getHeroesLoading)
        .subscribe(result => expect(result).toBeFalsy());
    });
  });
});
 */
