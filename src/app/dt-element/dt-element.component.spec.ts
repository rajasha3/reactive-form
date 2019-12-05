import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DtElementComponent } from './dt-element.component';

describe('DtElementComponent', () => {
  let component: DtElementComponent;
  let fixture: ComponentFixture<DtElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DtElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DtElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
