import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquadInformationComponent } from './squad-information.component';

describe('SquadInformationComponent', () => {
  let component: SquadInformationComponent;
  let fixture: ComponentFixture<SquadInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SquadInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SquadInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
