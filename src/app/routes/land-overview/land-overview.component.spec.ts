import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandOverviewComponent } from './land-overview.component';

describe('LandOverviewComponent', () => {
  let component: LandOverviewComponent;
  let fixture: ComponentFixture<LandOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
