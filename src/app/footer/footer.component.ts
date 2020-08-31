import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  quickLinks = [
    {
      content: 'Link 1',
      link: '#'
    }, {
      content: 'Link 2',
      link: '#'
    }, {
      content: 'Link 3',
      link: '#'
    }, {
      content: 'Link 4',
      link: '#'
    }, {
      content: 'Link 5',
      link: '#'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
