import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MongodetailComponent } from './mongodetail.component';

describe('MongodetailComponent', () => {
  let component: MongodetailComponent;
  let fixture: ComponentFixture<MongodetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MongodetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MongodetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
