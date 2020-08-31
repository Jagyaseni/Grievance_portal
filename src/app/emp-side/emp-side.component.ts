import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emp-side',
  templateUrl: './emp-side.component.html',
  styleUrls: ['./emp-side.component.scss']
})
export class EmpSideComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/']);
  }
}
