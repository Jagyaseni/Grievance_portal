import { Component, OnInit } from '@angular/core';
import { GrievanceService } from '../services/grievance.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.scss']


})
export class EmployeeDashboardComponent implements OnInit {
  constructor(private grievanceService: GrievanceService) { }

  grievance$: Observable<any>;

  ngOnInit(): void {
    this.grievance$ = this.grievanceService.getMyGrievances(localStorage.getItem('userID'));
  }
}
