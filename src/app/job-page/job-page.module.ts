import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobComponent } from './job/job.component';
import { JobInfoComponent } from './job-info/job-info.component';
import { JobAdditionalInfoComponent } from './job-additional-info/job-additional-info.component';
import { JobPicturesComponent } from './job-pictures/job-pictures.component';
import { JobLocationComponent } from './job-location/job-location.component';
import { SafePipe } from './safe.pipe';




@NgModule({
  declarations: [
    JobComponent,
    JobInfoComponent,
    JobAdditionalInfoComponent,
    JobPicturesComponent,
    JobLocationComponent,
    SafePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    JobComponent
  ]
})
export class JobPageModule { }
