import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmongoComponent } from './addmongo.component';

describe('AddmongoComponent', () => {
  let component: AddmongoComponent;
  let fixture: ComponentFixture<AddmongoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddmongoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmongoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
