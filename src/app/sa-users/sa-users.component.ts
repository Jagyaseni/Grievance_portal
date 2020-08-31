import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sa-users',
  templateUrl: './sa-users.component.html',
  styleUrls: ['./sa-users.component.scss']
})
export class SaUsersComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  staff$: Observable<any>;

  ngOnInit(): void {

    this.staff$ = this.userService.getStaff();
  }
  onDelete(){
    alert('are you sure to delete it?');
    //add delete function
    this.router.navigate(['/sausers']);
  }

}
