import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthIssueComponent } from './health-issue.component';

describe('HealthIssueComponent', () => {
  let component: HealthIssueComponent;
  let fixture: ComponentFixture<HealthIssueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthIssueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
