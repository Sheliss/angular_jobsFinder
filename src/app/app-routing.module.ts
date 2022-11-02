import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from './jobs-board/board/board.component';
import { JobComponent } from './job-page/job/job.component';

const routes: Routes = [
  { path: '', component: BoardComponent },
  { path: 'job', component: JobComponent },
  { path: 'job/:id', component: JobComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
