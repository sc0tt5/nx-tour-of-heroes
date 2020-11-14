import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroShellComponent } from './hero-shell.component';

describe('HeroShellComponent', () => {
  let component: HeroShellComponent;
  let fixture: ComponentFixture<HeroShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeroShellComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
