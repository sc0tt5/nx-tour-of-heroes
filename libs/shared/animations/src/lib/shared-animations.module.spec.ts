import { async, TestBed } from '@angular/core/testing';
import { SharedAnimationsModule } from './shared-animations.module';

describe('SharedAnimationsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedAnimationsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedAnimationsModule).toBeDefined();
  });
});
