import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjrModelChild1Component } from './ajr-model-child1.component';

describe('AjrModelChild1Component', () => {
  let component: AjrModelChild1Component;
  let fixture: ComponentFixture<AjrModelChild1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjrModelChild1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjrModelChild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
