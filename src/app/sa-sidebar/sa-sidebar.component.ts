import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sa-sidebar',
  templateUrl: './sa-sidebar.component.html',
  styleUrls: ['./sa-sidebar.component.scss']
})
export class SaSidebarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/']);
  }
}
