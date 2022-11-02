import { Component, OnInit } from '@angular/core';
import { Job, JobAdditionalInfo, JobMainInfo } from 'src/app/Interfaces/jobInfo';
import { JobsService } from 'src/app/globalComponents/jobs.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {
  jobId: string = "-1";
  jobMain: JobMainInfo = {
    name: "none",
    title: "none",
    salary: "0",
    createdAt: "0",
    description: "none"
  }
  jobAdditional: JobAdditionalInfo = {
    employment_type: ["none"],
    benefits: ["none"]
  }
  jobPictures: Array<string> = []

  constructor(private jobsService: JobsService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    if(this.route.snapshot.paramMap.get('id') !== null) {
      this.jobId = this.route.snapshot.paramMap.get('id')!;
    }

    if(this.jobId !== "-1") {
      this.jobsService.getJobs().subscribe((jobs: Job[]) => this.getInfo(jobs));
    }
  }

  getInfo = (res: Job[]) => {
    if(res.find(x => x.id === this.jobId) !== undefined) {
      const currentJob: Job = res.find(x => x.id === this.jobId)!
      
      this.jobMain = {
        name: currentJob.name,
        title: currentJob.title,
        salary: currentJob.salary,
        createdAt: currentJob.createdAt,
        description: currentJob.description
      }
      this.jobAdditional = {
        employment_type: currentJob.employment_type,
        benefits: currentJob.benefits
      }
      this.jobPictures = currentJob.pictures
    }
  }

}

