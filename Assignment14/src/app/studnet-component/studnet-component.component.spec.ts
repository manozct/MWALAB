import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudnetComponentComponent } from './studnet-component.component';

describe('StudnetComponentComponent', () => {
  let component: StudnetComponentComponent;
  let fixture: ComponentFixture<StudnetComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudnetComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudnetComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
