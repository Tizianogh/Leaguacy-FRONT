import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogJoinLeagueComponent } from './dialog-join-league.component';

describe('DialogJoinLeagueComponent', () => {
  let component: DialogJoinLeagueComponent;
  let fixture: ComponentFixture<DialogJoinLeagueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogJoinLeagueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogJoinLeagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
