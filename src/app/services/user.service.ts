import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fire: AngularFirestore) { }

  getData(userID: string) {
    return this.fire.collection('users').doc(userID).valueChanges();
  }

  updateData(userData: User, userID: string) {
    this.fire.collection('users').doc(userID).update({
      ...userData
    });
  }

  getAdmins() {
    return this.fire.collection('users', ref => ref.where('userLevel', '==', 'ADMIN')).valueChanges();
  }

  createNewEmployee(
    pfNum: string,
    firstName: string = '',
    lastName: string = '',
    mobileNum: string = '',
    email: string = '',
    city: string = '',
    state: string = '',
    postalCode: string = ''
  ) {
    this.fire.collection('users').doc(pfNum).set({
      pfNum,
      firstName,
      lastName,
      mobileNum,
      email,
      city,
      state,
      postalCode,
      userLevel: 'EMPLOYEE',
      password: pfNum
    });
  }

  deleteUser(userID: string) {
    this.fire.collection('users').doc(userID).delete();
  }

  getStaff() {
    return this.fire.collection('users', ref => ref.where('userLevel', '==', 'EMPLOYEE')).valueChanges();
  }

  deleteStaff(userData: User, userID: string){
    this.fire.collection('users').doc(userID).delete();
  }
 




}
