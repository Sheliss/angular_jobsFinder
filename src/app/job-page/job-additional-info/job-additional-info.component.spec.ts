import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobAdditionalInfoComponent } from './job-additional-info.component';

describe('JobAdditionalInfoComponent', () => {
  let component: JobAdditionalInfoComponent;
  let fixture: ComponentFixture<JobAdditionalInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobAdditionalInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobAdditionalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
