import { Component, OnInit, Input } from '@angular/core';
import { JobLocation } from 'src/app/Interfaces/jobInfo';
import { DomSanitizer } from '@angular/platform-browser';

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
  
  mapUrl: string = "";

  constructor(private sanitizer:DomSanitizer) { }

  ngOnInit(): void {

    this.mapUrl = 'https://maps.google.com/maps?q=' + this.data.location.lat + ', ' + this.data.location.long + '&z=15&output=embed';


  }

}
