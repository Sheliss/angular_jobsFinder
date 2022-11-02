import { Component, OnInit, Input } from '@angular/core';
import { Job } from 'src/app/Interfaces/jobInfo';
import * as moment from 'moment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-board-card',
  templateUrl: './board-card.component.html',
  styleUrls: ['./board-card.component.css']
})
export class BoardCardComponent implements OnInit {
  @Input() job: Job = {
    id: "-1",
    name: "none",
    email: "none",
    phone: "none",
    title: "none",
    salary: "0",
    address: "none",
    benefits: ["none"],
    location: {
      "lat": 0,
      "long": 0
    },
    pictures: ["none"],
    createdAt: "0",
    updatedAt: "0",
    description: "none",
    employment_type: ["none"]
  }

  
  constructor( private router: Router ) { }
  date: Date = new Date();
  passed: string = "none";

  ngOnInit(): void {
    this.getCreatedDate(this.job.createdAt);
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

  goToDetailed() {
    this.router.navigateByUrl('/job/' + this.job.id)
  }

}
