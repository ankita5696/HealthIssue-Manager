import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthissueDetailsComponent } from './healthissue-details.component';

describe('HealthissueDetailsComponent', () => {
  let component: HealthissueDetailsComponent;
  let fixture: ComponentFixture<HealthissueDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthissueDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthissueDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
