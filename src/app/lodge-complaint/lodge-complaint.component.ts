import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GrievanceService } from '../services/grievance.service';

@Component({
  selector: 'app-lodge-complaint',
  templateUrl: './lodge-complaint.component.html',
  styleUrls: ['./lodge-complaint.component.scss']
})
export class LodgeComplaintComponent implements OnInit {
  constructor(private grievanceService: GrievanceService) { }

  lodgeComplaintForm = new FormGroup({
    catIssues: new FormControl('', Validators.required),
    subCatIssues: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required)
  });

  categories = [
    'Service Record',
    'Salary',
    'Staff Benefits',
    'Cadre',
    'Orderly Room'
  ];

  subCategories = [
    'Movable and immovable property',
    'Service Register',
    'MACP',
    'Fixation Settlement',
    'APAR',
    'Barracks maintenance',
    'Pass Application/PTO',
    'Medical card/UMID',
    'SBF CSBF',
    'Quaters',
    'Leave',
    'Transfer',
    'Seniority',
    'Promotion',
    'Premature Retirement',
    'SrDSC',
    'PCSC',
    'DG'
  ];

  ngOnInit(): void {
  }

  lodgeComplaint() {
    const formData = this.lodgeComplaintForm.value;
    const raisedBy = localStorage.getItem('userID');
    this.grievanceService.lodgeGrievance(formData.catIssues, formData.subCatIssues, formData.title, formData.description, raisedBy);
  }
}
