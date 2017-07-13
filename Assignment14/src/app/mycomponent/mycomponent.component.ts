import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'componentRout',
  template: `
    <div>
      <nav>
        <ul>
          <li><a [routerLink]="['homepage']" routerLinkActive="active">Homepage</a></li>
          <li><a [routerLink]="['students']">Students</a></li>          
          
        </ul>
      </nav>
      <router-outlet></router-outlet>
    </div>
   
  `,
  styles: []
})
export class MycomponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
