import { Component, OnInit } from '@angular/core';
import {DbService} from "../db.service";
import {Student} from "../Student";

@Component({
  selector: 'app-studnet-component',
  template: `
    <p>
     Welcome to Student Page
    </p>
    <li>List of Students
      <ul *ngFor="let student of students"><a [routerLink]="['profile',student.id]">{{student.name}}</a></ul>
    </li>
    
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class StudnetComponentComponent implements OnInit {

  constructor(private db:DbService) { }
  students:Student[];

  ngOnInit() {
   this.students=this.db.getStudent();

  }

}
