import { Component, OnInit } from '@angular/core';
import { Job, JobAdditionalInfo, JobMainInfo } from 'src/app/Interfaces/jobInfo';
import { JobsService } from 'src/app/globalComponents/jobs.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';


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
  jobPictures: Array<string> = [];

  date: Date = new Date();
  passed: string = "none";


  constructor(private jobsService: JobsService, private route: ActivatedRoute, private router: Router) { }

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
      
      this.getCreatedDate(currentJob.createdAt);

      this.jobMain = {
        name: currentJob.name,
        title: currentJob.title,
        salary: currentJob.salary,
        createdAt: this.passed,
        description: currentJob.description
      }
      this.jobAdditional = {
        employment_type: currentJob.employment_type,
        benefits: currentJob.benefits
      }
      this.jobPictures = currentJob.pictures
    }
  }

  getCreatedDate = (date: string) => {
    let day: number = 0;
    let month: number = 0;
    let year: number = 0;

    this.date = new Date(date);

    day = this.date.getDate();
    month = this.date.getMonth();
    year = this.date.getFullYear();

    this.passed = moment([year, month, day]).fromNow();
  }

  onClickReturn = () => {
    this.router.navigateByUrl('')
  }

}

