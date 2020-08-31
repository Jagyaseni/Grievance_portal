import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dealer-grievances',
  templateUrl: './dealer-grievances.component.html',
  styleUrls: ['./dealer-grievances.component.scss']
})
export class DealerGrievancesComponent implements OnInit {

  grievances = [
    {
      title: 'Grievance1 Title',
      dateOfPost: '21-05-2020',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor morbi non arcu risus quis varius quam quisque id. Turpis cursus in hac habitasse platea dictumst quisque. Orci a scelerisque purus semper eget duis. Egestas quis ipsum suspendisse ultrices. Eget velit aliquet sagittis id consectetur purus ut faucibus. Id velit ut tortor pretium viverra suspendisse potenti nullam ac. Odio pellentesque diam volutpat commodo sed. Sit amet consectetur adipiscing elit duis tristique sollicitudin nibh sit. Pharetra diam sit amet nisl. Sed lectus vestibulum mattis ullamcorper velit sed. Mollis nunc sed id semper risus. Elementum sagittis vitae et leo.',
      category: '',
      subCategory: '',
      status: {
        new: true,
        pending: true,
        closed: false
      }
    },
    {
      title: 'Grievance2 Title',
      dateOfPost: '21-05-2020',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor morbi non arcu risus quis varius quam quisque id. Turpis cursus in hac habitasse platea dictumst quisque. Orci a scelerisque purus semper eget duis. Egestas quis ipsum suspendisse ultrices. Eget velit aliquet sagittis id consectetur purus ut faucibus. Id velit ut tortor pretium viverra suspendisse potenti nullam ac. Odio pellentesque diam volutpat commodo sed. Sit amet consectetur adipiscing elit duis tristique sollicitudin nibh sit. Pharetra diam sit amet nisl. Sed lectus vestibulum mattis ullamcorper velit sed. Mollis nunc sed id semper risus. Elementum sagittis vitae et leo.',
      category: '',
      subCategory: '',
      status: {
        new: true,
        pending: true,
        closed: false
      }
    },
    {
      title: 'Grievance3 Title',
      dateOfPost: '20-05-2020',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor morbi non arcu risus quis varius quam quisque id. Turpis cursus in hac habitasse platea dictumst quisque. Orci a scelerisque purus semper eget duis. Egestas quis ipsum suspendisse ultrices. Eget velit aliquet sagittis id consectetur purus ut faucibus. Id velit ut tortor pretium viverra suspendisse potenti nullam ac. Odio pellentesque diam volutpat commodo sed. Sit amet consectetur adipiscing elit duis tristique sollicitudin nibh sit. Pharetra diam sit amet nisl. Sed lectus vestibulum mattis ullamcorper velit sed. Mollis nunc sed id semper risus. Elementum sagittis vitae et leo.',
      category: '',
      subCategory: '',
      status: {
        new: false,
        pending: false,
        closed: true
      }
    },
    {
      title: 'Grievance4 Title',
      dateOfPost: '18-05-2020',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor morbi non arcu risus quis varius quam quisque id. Turpis cursus in hac habitasse platea dictumst quisque. Orci a scelerisque purus semper eget duis. Egestas quis ipsum suspendisse ultrices. Eget velit aliquet sagittis id consectetur purus ut faucibus. Id velit ut tortor pretium viverra suspendisse potenti nullam ac. Odio pellentesque diam volutpat commodo sed. Sit amet consectetur adipiscing elit duis tristique sollicitudin nibh sit. Pharetra diam sit amet nisl. Sed lectus vestibulum mattis ullamcorper velit sed. Mollis nunc sed id semper risus. Elementum sagittis vitae et leo.',
      category: '',
      subCategory: '',
      status: {
        new: false,
        pending: true,
        closed: false
      }
    },
    {
      title: 'Grievance5 Title',
      dateOfPost: '17-05-2020',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor morbi non arcu risus quis varius quam quisque id. Turpis cursus in hac habitasse platea dictumst quisque. Orci a scelerisque purus semper eget duis. Egestas quis ipsum suspendisse ultrices. Eget velit aliquet sagittis id consectetur purus ut faucibus. Id velit ut tortor pretium viverra suspendisse potenti nullam ac. Odio pellentesque diam volutpat commodo sed. Sit amet consectetur adipiscing elit duis tristique sollicitudin nibh sit. Pharetra diam sit amet nisl. Sed lectus vestibulum mattis ullamcorper velit sed. Mollis nunc sed id semper risus. Elementum sagittis vitae et leo.',
      category: '',
      subCategory: '',
      status: {
        new: false,
        pending: false,
        closed: true
      }
    },
    {
      title: 'Grievance6 Title',
      dateOfPost: '15-05-2020',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor morbi non arcu risus quis varius quam quisque id. Turpis cursus in hac habitasse platea dictumst quisque. Orci a scelerisque purus semper eget duis. Egestas quis ipsum suspendisse ultrices. Eget velit aliquet sagittis id consectetur purus ut faucibus. Id velit ut tortor pretium viverra suspendisse potenti nullam ac. Odio pellentesque diam volutpat commodo sed. Sit amet consectetur adipiscing elit duis tristique sollicitudin nibh sit. Pharetra diam sit amet nisl. Sed lectus vestibulum mattis ullamcorper velit sed. Mollis nunc sed id semper risus. Elementum sagittis vitae et leo.',
      category: '',
      subCategory: '',
      status: {
        new: false,
        pending: true,
        closed: false
      }
    },
    {
      title: 'Grievance7 Title',
      dateOfPost: '15-05-2020',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor morbi non arcu risus quis varius quam quisque id. Turpis cursus in hac habitasse platea dictumst quisque. Orci a scelerisque purus semper eget duis. Egestas quis ipsum suspendisse ultrices. Eget velit aliquet sagittis id consectetur purus ut faucibus. Id velit ut tortor pretium viverra suspendisse potenti nullam ac. Odio pellentesque diam volutpat commodo sed. Sit amet consectetur adipiscing elit duis tristique sollicitudin nibh sit. Pharetra diam sit amet nisl. Sed lectus vestibulum mattis ullamcorper velit sed. Mollis nunc sed id semper risus. Elementum sagittis vitae et leo.',
      category: '',
      subCategory: '',
      status: {
        new: false,
        pending: false,
        closed: true
      }
    },
    {
      title: 'Grievance8 Title',
      dateOfPost: '7-05-2020',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor morbi non arcu risus quis varius quam quisque id. Turpis cursus in hac habitasse platea dictumst quisque. Orci a scelerisque purus semper eget duis. Egestas quis ipsum suspendisse ultrices. Eget velit aliquet sagittis id consectetur purus ut faucibus. Id velit ut tortor pretium viverra suspendisse potenti nullam ac. Odio pellentesque diam volutpat commodo sed. Sit amet consectetur adipiscing elit duis tristique sollicitudin nibh sit. Pharetra diam sit amet nisl. Sed lectus vestibulum mattis ullamcorper velit sed. Mollis nunc sed id semper risus. Elementum sagittis vitae et leo.',
      category: '',
      subCategory: '',
      status: {
        new: false,
        pending: false,
        closed: true
      }
    },
    {
      title: 'Grievance9 Title',
      dateOfPost: '5-05-2020',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor morbi non arcu risus quis varius quam quisque id. Turpis cursus in hac habitasse platea dictumst quisque. Orci a scelerisque purus semper eget duis. Egestas quis ipsum suspendisse ultrices. Eget velit aliquet sagittis id consectetur purus ut faucibus. Id velit ut tortor pretium viverra suspendisse potenti nullam ac. Odio pellentesque diam volutpat commodo sed. Sit amet consectetur adipiscing elit duis tristique sollicitudin nibh sit. Pharetra diam sit amet nisl. Sed lectus vestibulum mattis ullamcorper velit sed. Mollis nunc sed id semper risus. Elementum sagittis vitae et leo.',
      category: '',
      subCategory: '',
      status: {
        new: false,
        pending: false,
        closed: true
      }
    },
    {
      title: 'Grievance10 Title',
      dateOfPost: '1-05-2020',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor morbi non arcu risus quis varius quam quisque id. Turpis cursus in hac habitasse platea dictumst quisque. Orci a scelerisque purus semper eget duis. Egestas quis ipsum suspendisse ultrices. Eget velit aliquet sagittis id consectetur purus ut faucibus. Id velit ut tortor pretium viverra suspendisse potenti nullam ac. Odio pellentesque diam volutpat commodo sed. Sit amet consectetur adipiscing elit duis tristique sollicitudin nibh sit. Pharetra diam sit amet nisl. Sed lectus vestibulum mattis ullamcorper velit sed. Mollis nunc sed id semper risus. Elementum sagittis vitae et leo.',
      category: '',
      subCategory: '',
      status: {
        new: false,
        pending: false,
        closed: true
      }
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
