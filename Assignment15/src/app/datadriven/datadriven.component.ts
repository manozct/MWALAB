import {Component} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpService} from "../http.service";

@Component({
  selector: 'datadrivenComponent',
  templateUrl: 'component.html',
  styles: []
})
export class DatadrivenComponent {
  myForm: FormGroup;
  user={name:'',email:'',post:''};

  constructor(private formBuilder: FormBuilder, private httpService: HttpService) {
    this.myForm = formBuilder.group({
      'name': ['', Validators.required],
      'email': ['', Validators.required],
      'post': ['', Validators.minLength(10)]
    });
  }

  onSubmit() {
    console.log(this.user);
  }

  onGet() {
    console.log('onGet called');
    this.httpService.getUser().subscribe(
      response => {
        this.user.name=response.name;
        this.user.email=response.email;
      }


    );
    console.log(this.user.name);

    this.httpService.getPost().subscribe(
     response => {
        this.user.post=response[0].body;
      }
    );

  }

}
