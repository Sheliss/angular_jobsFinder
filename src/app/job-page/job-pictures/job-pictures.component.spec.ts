import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobPicturesComponent } from './job-pictures.component';

describe('JobPicturesComponent', () => {
  let component: JobPicturesComponent;
  let fixture: ComponentFixture<JobPicturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobPicturesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobPicturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
