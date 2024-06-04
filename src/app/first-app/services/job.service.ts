import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JobDetails } from '../login/dashboard/job.module';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private url: string;

  constructor( private http: HttpClient) { 
    this.url = "http://localhost:3000/jobs";
  }

  getJobs() {
    return this.http.get<JobDetails[]>(this.url);
  }

  addJobs(job: JobDetails) {
    return this.http.post<JobDetails>(this.url, job);
  }

  editJobs(job: JobDetails) {
    return this.http.put<JobDetails>(this.url, job);
  }

  deleteJobs(id: string) {
    return this.http.delete(`${this.url}/${id}`);
  }
}