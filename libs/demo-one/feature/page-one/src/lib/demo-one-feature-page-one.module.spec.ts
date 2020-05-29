import { async, TestBed } from '@angular/core/testing';
import { DemoOneFeaturePageOneModule } from './demo-one-feature-page-one.module';

describe('DemoOneFeaturePageOneModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DemoOneFeaturePageOneModule]
    }).compileComponents();
  }));

  it('should create the module', () => {
    expect(DemoOneFeaturePageOneModule).toBeDefined();
  });
});
