import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-sa-admin',
  templateUrl: './sa-admin.component.html',
  styleUrls: ['./sa-admin.component.scss']
})
export class SaAdminComponent implements OnInit {

  constructor(private userService: UserService) { }

  admin$: Observable<any>;

  ngOnInit(): void {
    this.admin$ = this.userService.getAdmins();
  }
}
