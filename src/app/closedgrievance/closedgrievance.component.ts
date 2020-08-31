import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GrievanceService } from '../services/grievance.service';

@Component({
  selector: 'app-closedgrievance',
  templateUrl: './closedgrievance.component.html',
  styleUrls: ['./closedgrievance.component.scss']
})
export class ClosedgrievanceComponent implements OnInit {

  constructor(private grievanceService: GrievanceService) { }

  cgrievance$: Observable<any>;

  ngOnInit(): void {
    this.cgrievance$ = this.grievanceService.getCloseGrievance();
  }

}
