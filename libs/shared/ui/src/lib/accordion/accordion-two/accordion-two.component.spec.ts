import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AccordionTwoComponent } from './accordion-two.component';

describe('AccordionTwoComponent', () => {
  let component: AccordionTwoComponent;
  let fixture: ComponentFixture<AccordionTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AccordionTwoComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionTwoComponent);
    component = fixture.componentInstance;
    component.item = { header: 'header 4', content: 'content 4' };
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
