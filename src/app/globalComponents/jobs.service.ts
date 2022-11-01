import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Job } from '../Interfaces/jobInfo';

@Injectable({
  providedIn: 'root'
})
export class JobsService {
  private apiUri: string = "https://api.json-generator.com/templates/ZM1r0eic3XEy/data";
  private auth_token: string = "wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu";

  constructor(private http: HttpClient) { }

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.auth_token}`
  });

  private requestOptions = {headers: this.headers};

  getJobs(): Observable<Job[]> {
    return this.http
      .get<Job[]>(this.apiUri, this.requestOptions);
  }
}
