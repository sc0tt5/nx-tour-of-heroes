import { async, TestBed } from '@angular/core/testing';
import { DemoOneFeaturePageTwoModule } from './demo-one-feature-page-two.module';

describe('DemoOneFeaturePageTwoModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DemoOneFeaturePageTwoModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(DemoOneFeaturePageTwoModule).toBeDefined();
  });
});
