import {Injectable} from "@angular/core";
import {studentList} from "./StudentList";
import {Student} from "./Student";

@Injectable()
export class DbService {

  constructor() {
  }

  private studentList:Student[];
  private student:Student;

  getStudent() {
    return studentList;
  }
  getStudentById(id:number){
    for(let s of studentList){
      if(s.id==id){
        this.student=s;

      }

    }
    return this.student;


  }
  filterId(id:number){
    for(let s of studentList){
      if(s.id==id){
        return true;
      }
    }
    return false;
  }




}
