import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-job-pictures',
  templateUrl: './job-pictures.component.html',
  styleUrls: ['./job-pictures.component.css']
})
export class JobPicturesComponent implements OnInit {
  @Input() data: Array<string> = ["none"];

  constructor() { }

  ngOnInit(): void {
  }

}
