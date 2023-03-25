import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandSetupComponent } from './land-setup.component';

describe('LandSetupComponent', () => {
  let component: LandSetupComponent;
  let fixture: ComponentFixture<LandSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandSetupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
