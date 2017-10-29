import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjrModelComponent } from './ajr-model.component';

describe('AjrModelComponent', () => {
  let component: AjrModelComponent;
  let fixture: ComponentFixture<AjrModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjrModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjrModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
