import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaymoviedetailComponent } from './displaymoviedetail.component';

describe('DisplaymoviedetailComponent', () => {
  let component: DisplaymoviedetailComponent;
  let fixture: ComponentFixture<DisplaymoviedetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaymoviedetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaymoviedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
