import { Component, OnInit, Input } from '@angular/core';
import { JobMainInfo } from 'src/app/Interfaces/jobInfo';

@Component({
  selector: 'app-job-info',
  templateUrl: './job-info.component.html',
  styleUrls: ['./job-info.component.css']
})
export class JobInfoComponent implements OnInit {
  @Input() data: JobMainInfo = {
    name: "none",
    title: "none",
    salary: "0",
    createdAt: "0",
    description: "none"
  }

  constructor() { }

  ngOnInit(): void {
  }

  onApply() {
    alert('Applied!')
  }

}
