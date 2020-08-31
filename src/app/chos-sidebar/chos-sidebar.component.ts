import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chos-sidebar',
  templateUrl: './chos-sidebar.component.html',
  styleUrls: ['./chos-sidebar.component.scss']
})
export class ChosSidebarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/']);
  }
}
