import { Component, OnInit } from '@angular/core';
import { JobsService } from '../../globalComponents/jobs.service';
import { Job } from 'src/app/Interfaces/jobInfo';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  jobs: Job[] = [];

  constructor(private jobsService: JobsService) { }

  ngOnInit(): void {
    this.jobsService.getJobs().subscribe((jobs: Job[]) => (this.jobs = jobs));
  }

}
