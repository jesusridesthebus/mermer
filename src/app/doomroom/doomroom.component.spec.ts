import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoomroomComponent } from './doomroom.component';

describe('DoomroomComponent', () => {
  let component: DoomroomComponent;
  let fixture: ComponentFixture<DoomroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoomroomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoomroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
