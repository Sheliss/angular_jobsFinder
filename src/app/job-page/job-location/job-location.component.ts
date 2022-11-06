import { Component, OnInit, Input } from '@angular/core';
import { JobLocation } from 'src/app/Interfaces/jobInfo';

@Component({
  selector: 'app-job-location',
  templateUrl: './job-location.component.html',
  styleUrls: ['./job-location.component.css']
})
export class JobLocationComponent implements OnInit {
  @Input() data: JobLocation = {
    name: "none",
    address: "none",
    phone: "0",
    email: "none",
    location: {
      lat: 0,
      long: 0
    }
  } 


  constructor() { }

  ngOnInit(): void {
  }

}
