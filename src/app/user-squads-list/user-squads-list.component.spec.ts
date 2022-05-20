import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSquadsListComponent } from './user-squads-list.component';

describe('UserSquadsListComponent', () => {
  let component: UserSquadsListComponent;
  let fixture: ComponentFixture<UserSquadsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSquadsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSquadsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
