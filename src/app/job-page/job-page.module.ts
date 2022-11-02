import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobComponent } from './job/job.component';
import { JobMainComponent } from './job-main/job-main.component';



@NgModule({
  declarations: [
    JobComponent,
    JobMainComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    JobComponent
  ]
})
export class JobPageModule { }
