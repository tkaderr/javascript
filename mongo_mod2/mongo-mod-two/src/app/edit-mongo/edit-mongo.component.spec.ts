import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMongoComponent } from './edit-mongo.component';

describe('EditMongoComponent', () => {
  let component: EditMongoComponent;
  let fixture: ComponentFixture<EditMongoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMongoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMongoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
