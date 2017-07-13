import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildStudentComponent } from './child-student.component';

describe('ChildStudentComponent', () => {
  let component: ChildStudentComponent;
  let fixture: ComponentFixture<ChildStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
