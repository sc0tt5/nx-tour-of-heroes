import { TestBed, waitForAsync } from '@angular/core/testing';

import { SharedAnimationsModule } from './shared-animations.module';

describe('SharedAnimationsModule', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [SharedAnimationsModule]
      }).compileComponents();
    })
  );

  it('should create', () => {
    expect(SharedAnimationsModule).toBeDefined();
  });
});
