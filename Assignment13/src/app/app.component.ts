import {Component} from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  private names: string[] = ['Manoj Chaudhary', 'Zamuna Ghale', 'Sulav Neupane', 'Kshitz Poudel'];
}
