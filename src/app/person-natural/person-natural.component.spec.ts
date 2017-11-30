import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonNaturalComponent } from './person-natural.component';

describe('PersonNaturalComponent', () => {
  let component: PersonNaturalComponent;
  let fixture: ComponentFixture<PersonNaturalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonNaturalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonNaturalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
