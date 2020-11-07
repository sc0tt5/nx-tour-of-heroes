import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { PageOne } from '@nx-demo/shared/models';

import { initialState, PageOneState } from './page-one.reducer';
import { pageOneSelectors } from './page-one.selectors';

@Component({
  template: ` <div>{{ (page$ | async)?.name }}</div> `
})
export class MockComponent {
  page$ = this.store.select(pageOneSelectors.getPageOne);

  constructor(private store: Store<PageOneState>) {}
}

describe('PageOne Selectors', () => {
  let fixture: ComponentFixture<MockComponent>;
  let store: MockStore<PageOneState>;
  let page: PageOne;
  const queryDivText = () =>
    fixture.debugElement.queryAll(By.css('div'))[0].nativeElement.textContent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MockComponent],
      providers: [provideMockStore({ initialState })]
    });

    fixture = TestBed.createComponent(MockComponent);
    store = TestBed.inject(Store) as MockStore<PageOneState>;

    // mock page and setup selector with overrideSelector
    page = { name: 'test', content: null, param: null, accordionItems: [] };
    store.overrideSelector(pageOneSelectors.getPageOne, page);
    store.overrideSelector(pageOneSelectors.getPageOneLoaded, true);
    store.overrideSelector(pageOneSelectors.getPageOneLoading, false);

    fixture.detectChanges();
  });

  describe('getPageOne', () => {
    it('should return the page content', () => {
      store.select(pageOneSelectors.getPageOne).subscribe(result => expect(result).toBe(page));
    });

    it('should display the page name', () => {
      expect(queryDivText()).toBe(page.name);
    });
  });

  describe('getPageOneLoaded', () => {
    it('should return the page loaded state', () => {
      store
        .select(pageOneSelectors.getPageOneLoaded)
        .subscribe(result => expect(result).toBeTruthy());
    });
  });

  describe('getPageOneLoading', () => {
    it('should return the page loading state', () => {
      store
        .select(pageOneSelectors.getPageOneLoading)
        .subscribe(result => expect(result).toBeFalsy());
    });
  });
});
