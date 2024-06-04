import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HighlightDirective } from '../../highlight.directive';
import { JobService } from '../../services/job.service';
import { ExponentialStrengthPipe } from '../exponential-strength.pipe';
import { JobDetailsComponent } from './job-details/job-details.component';
import { JobDetails } from './job.module';
import { create } from 'domain';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, HighlightDirective, CurrencyPipe, ExponentialStrengthPipe, JobDetailsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  jobs: JobDetails[] = [
    {
      id: "1",
      title: 'Software Engineer',
      salary: '$70,000 - $150,000',
      experience: '2+ years of experience in software development',
      location: 'Various (depends on company)',
      description:
        'Software engineers design, develop, and maintain software applications. They work on creating user-friendly interfaces, writing code, debugging, and testing software systems.',
    },
    {
      id: "2",
      title: 'Registered Nurse',
      salary: '$50,000 - $100,000',
      experience:
        'Varies by position, typically 1-2 years of clinical experience',
      location: 'Hospitals, clinics, nursing homes, etc.',
      description:
        'Registered nurses provide patient care in various healthcare settings. They assess patient health needs, develop care plans, administer medications, and educate patients and their families about health conditions.',
    },
    {
      id: "3",
      title: 'Marketing Manager',
      salary: '$60,000 - $120,000',
      experience: '3-5 years of experience in marketing or related field',
      location: 'Office-based, may require travel',
      description:
        'Marketing managers oversee marketing campaigns and strategies to promote products or services. They analyze market trends, coordinate with advertising agencies, and collaborate with sales teams to maximize brand awareness and sales.',
    },
    {
      id: "4",
      title: 'Electrician',
      salary: '$40,000 - $80,000',
      experience: 'Varies, typically 3-5 years of apprenticeship experience',
      location:
        'Construction sites, residential buildings, commercial buildings',
      description:
        'Electricians install, maintain, and repair electrical systems in various settings. They interpret blueprints, inspect electrical components, and ensure compliance with electrical codes and regulations to ensure safety and functionality.',
    },
  ];

  selectedJob: JobDetails;

  constructor(private router: Router, private jobService: JobService) { }

  ngOnInit() {
    this.jobService.getJobs().subscribe((res) => {
      this.jobs = res;
    });
  }
    
    createJob (){
    this.jobService.addJobs({ 
      "id": "2",
      "title": "Registered Nurse",
      "salary": "$50,000 - $100,000",
      "experience": "'Varies by position, typically 1-2 years of clinical experience'",
      "location": "'Hospitals, clinics, nursing homes, etc.'",
      "description": "'Registered nurses provide patient care in various healthcare settings. They assess patient health needs, develop care plans, administer medications, and educate patients and their families about health conditions.'"
    }).subscribe();
  }

  deleteJob(){
    this.jobService.deleteJobs("2").subscribe();
  }

  select(job: JobDetails) {
    this.selectedJob = job;
  }

  applied(appliedJob: JobDetails) {
    this.jobs.forEach((job) => {
      if (job === appliedJob) {
        job.applied = true;
        console.log('job', job)
      }
    });
  }

  logout() {
    this.router.navigate(['/first-app/dashboard']);
  }
}

function job(value: JobDetails, index: number, array: JobDetails[]): void {
  throw new Error('Function not implemented.');
}
