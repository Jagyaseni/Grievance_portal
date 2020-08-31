import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GrievanceService } from '../services/grievance.service';

@Component({
  selector: 'app-activegrievance',
  templateUrl: './activegrievance.component.html',
  styleUrls: ['./activegrievance.component.scss']
})
export class ActivegrievanceComponent implements OnInit {

  constructor(private grievanceService: GrievanceService) { }

  agrievance$: Observable<any>;

  ngOnInit(): void {
    this.agrievance$ = this.grievanceService.getActiveGrievance();
  }

}
