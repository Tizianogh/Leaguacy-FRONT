import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquadRecapitulatifComponent } from './squad-recapitulatif.component';

describe('SquadRecapitulatifComponent', () => {
  let component: SquadRecapitulatifComponent;
  let fixture: ComponentFixture<SquadRecapitulatifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SquadRecapitulatifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SquadRecapitulatifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
