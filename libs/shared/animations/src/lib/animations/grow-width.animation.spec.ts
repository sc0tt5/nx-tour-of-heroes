import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { growWidthAnimation } from './grow-width.animation';

@Component({
  template: ` <div *ngIf="!pageLoaded" [@growWidth]></div> `,
  animations: [growWidthAnimation()]
})
export class TestComponent {
  pageLoaded = false;
}

describe('growWidthAnimation', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  const componentDiv = () => fixture.debugElement.queryAll(By.css('div'))[0].nativeElement;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [CommonModule, NoopAnimationsModule],
        declarations: [TestComponent]
      })
        .overrideComponent(TestComponent, {
          set: { changeDetection: ChangeDetectionStrategy.Default }
        })
        .compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('growWidth transition :enter', () => {
    it(
      'should animate width to 95%',
      waitForAsync(() => {
        fixture.whenRenderingDone().then(() => {
          expect(componentDiv().style.width).not.toBe('');
        });
      })
    );
  });

  // TODO: width on :leave
  /* describe('growWidth transition :leave', () => {
    it('should animate width to 100%', waitForAsync(() => {
      component.pageLoaded = true;
      fixture.detectChanges();
      fixture.whenRenderingDone().then(() => {
        expect(componentDiv().style.width).toBe('100%');
      });
    }));
  }); */
});
