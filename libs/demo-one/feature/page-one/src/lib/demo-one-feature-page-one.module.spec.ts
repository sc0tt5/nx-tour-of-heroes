import { TestBed, waitForAsync } from '@angular/core/testing';

import { DemoOneFeaturePageOneModule } from './demo-one-feature-page-one.module';

describe('DemoOneFeaturePageOneModule', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [DemoOneFeaturePageOneModule]
      }).compileComponents();
    })
  );

  it('should create the module', () => {
    expect(DemoOneFeaturePageOneModule).toBeDefined();
  });
});
