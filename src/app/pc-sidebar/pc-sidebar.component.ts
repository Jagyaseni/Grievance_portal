import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pc-sidebar',
  templateUrl: './pc-sidebar.component.html',
  styleUrls: ['./pc-sidebar.component.scss']
})
export class PcSidebarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/']);
  }
}
