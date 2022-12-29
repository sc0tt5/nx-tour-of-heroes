import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ContentLoaderComponent } from './content-loader.component';

describe('ContentLoaderComponent', () => {
  let component: ContentLoaderComponent<unknown>;
  let fixture: ComponentFixture<ContentLoaderComponent<unknown>>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ContentLoaderComponent],
      teardown: { destroyAfterEach: false }
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
