import { Component, EventEmitter, Input, Output } from '@angular/core';
import { JobDetails } from '../job.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-job-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.scss'
})

export class JobDetailsComponent {

  @Input() job: JobDetails;
  @Output() applied: EventEmitter<JobDetails> = new EventEmitter();

  apply(){
    this.applied.emit(this.job);
  }
}



