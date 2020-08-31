import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuItems = [
    {
      content: 'Home',
      link: '/'
    }, {
      content: 'About Us',
      link: '/about'
    }, {
      content: 'Complaint Status',
      link: '/status'
    }, {
      content: 'Redressal Process',
      link: '#'
    }, {
      content: 'Lodge Complaint',
      link: '/complaint'
    }, {
      content: 'Contact Us',
      link: '/contact'
    }, {
      content: 'FAQs',
      link: '/faq'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
