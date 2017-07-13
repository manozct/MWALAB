import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DbService} from "../db.service";
import {Student} from "../Student";
@Component({
  selector: 'profile',
  template: `
    <table>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Student ID</th>
        <th>Email</th>
      </tr>
      <tr>
        <td>{{student.id}}</td>
        <td>{{student.name}}</td>
        <td>{{student.stuId}}</td>
        <td>{{student.email}}</td>
      </tr>
    </table>
  `,
  styles: []
})
export class ChildStudentComponent implements OnInit {
   id:number;
  student:Student;
  constructor(private route:ActivatedRoute,private db:DbService) {


  }

  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.id=params['id']
      this.student=this.db.getStudentById(this.id);

    });
    console.log('id is'+this.id);

  }


}
