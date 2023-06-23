import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthissueAddComponent } from './healthissue-add.component';

describe('HealthissueAddComponent', () => {
  let component: HealthissueAddComponent;
  let fixture: ComponentFixture<HealthissueAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthissueAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthissueAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
