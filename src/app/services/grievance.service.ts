import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { GrievanceFilter } from '../models/grievance-filter';

@Injectable({
  providedIn: 'root'
})
export class GrievanceService {

  constructor(private fire: AngularFirestore, private router: Router) { }

  lodgeGrievance(category: string, subCategory: string, title: string, description: string, raisedBy: string) {
    const currTime = new Date();
    const issuedOn =
      currTime.getDate() + '/' +
      currTime.getMonth() + '/' +
      currTime.getFullYear() + ' @ ' +
      currTime.getHours() + ':' +
      currTime.getMinutes() + ':' +
      currTime.getSeconds();
    this.fire.collection('grievances').add({
      category,
      subCategory,
      title,
      description,
      raisedBy,
      issuedOn,
      status: 'OPEN'
    }).then((doc) => {
      this.fire.collection('grievances').doc(doc.id).update({
        trackingID: doc.id
      });
      alert('Lodged Complaint Successfully!');
      this.router.navigate(['/empdb']);
    });
  }

  getMyGrievances(userID: string) {
    return this.fire.collection('grievances', ref => ref.where('raisedBy', '==', userID)).valueChanges();
  }

  getActiveGrievance() {
    return this.fire.collection('grievances', ref => ref.where('status', '==', 'OPEN')).valueChanges();
  }

  getCloseGrievance() {
    return this.fire.collection('grievances', ref => ref.where('status', '==', 'CLOSE')).valueChanges();
  }

  getAllGrievances(filters: GrievanceFilter) {
    /* return this.fire.collection('grievances', ref => {
      let finalQuery = ref.where('trackingID', '>=', '');
      if (filters.category != null) {
        finalQuery = finalQuery.where('category', '==', filters.category);
      }
      if (filters.subcategory != null) {
        finalQuery = finalQuery.where('subCategory', '==', filters.subcategory);
      }
      if (filters.status != null) {
        finalQuery = finalQuery.where('status', '==', filters.status);
      }
      return finalQuery;
    }).valueChanges(); */

    const allCategories = [
      'Service Record',
      'Salary',
      'Staff Benefits',
      'Cadre',
      'Orderly Room'
    ];

    const allSubCategories = [
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

    const allStatuses = [
      'OPEN',
      'PENDING',
      'CLOSE'
    ];

    return this.fire.collection('grievances', ref =>
      ref.where('category', 'in', filters.category ? [filters.category] : allCategories)
        .where('subCategory', 'in', filters.subcategory ? [filters.subcategory] : allSubCategories)
        .where('status', 'in', filters.status ? [filters.status] : allStatuses)
    ).valueChanges();
  }
}
