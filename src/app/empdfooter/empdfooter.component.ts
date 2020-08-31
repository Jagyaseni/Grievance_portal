import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empdfooter',
  templateUrl: './empdfooter.component.html',
  styleUrls: ['./empdfooter.component.scss']
})
export class EmpdfooterComponent implements OnInit {
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
