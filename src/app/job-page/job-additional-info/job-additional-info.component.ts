import { Component, OnInit, Input } from '@angular/core';
import { JobAdditionalInfo } from 'src/app/Interfaces/jobInfo';

@Component({
  selector: 'app-job-additional-info',
  templateUrl: './job-additional-info.component.html',
  styleUrls: ['./job-additional-info.component.css']
})
export class JobAdditionalInfoComponent implements OnInit {
  @Input() data: JobAdditionalInfo = {
    employment_type: ["none"],
    benefits: ["none"]
  }

  constructor() { }

  ngOnInit(): void {
  }

}
