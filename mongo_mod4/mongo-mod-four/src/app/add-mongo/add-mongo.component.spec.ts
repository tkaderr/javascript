import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMongoComponent } from './add-mongo.component';

describe('AddMongoComponent', () => {
  let component: AddMongoComponent;
  let fixture: ComponentFixture<AddMongoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMongoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMongoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
