import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dealer-sidebar',
  templateUrl: './dealer-sidebar.component.html',
  styleUrls: ['./dealer-sidebar.component.scss']
})
export class DealerSidebarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/']);
  }
}
