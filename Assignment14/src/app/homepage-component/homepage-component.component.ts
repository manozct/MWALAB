import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'app-homepage-component',
  template: `
    <div>
     <p>Welcome to HomePage</p>
    </div>
  `,
  styles: []
})
export class HomepageComponentComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
