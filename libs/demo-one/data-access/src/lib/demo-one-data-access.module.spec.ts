import { async, TestBed } from '@angular/core/testing';
import { DemoOneDataAccessModule } from './demo-one-data-access.module';

describe('DemoOneDataAccessModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DemoOneDataAccessModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(DemoOneDataAccessModule).toBeDefined();
  });
});
