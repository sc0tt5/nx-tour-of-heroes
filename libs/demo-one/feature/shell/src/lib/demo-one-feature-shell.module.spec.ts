import { async, TestBed } from '@angular/core/testing';
import { DemoOneFeatureShellModule } from './demo-one-feature-shell.module';

describe('DemoOneFeatureShellModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DemoOneFeatureShellModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(DemoOneFeatureShellModule).toBeDefined();
  });
});
