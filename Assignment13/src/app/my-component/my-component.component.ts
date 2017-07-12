import {Component, Input, OnInit} from "@angular/core";

@Component({
  selector: 'myComponent',
  template: `
    
   <ul><li *ngFor="let name of names" appUpper [appMyvisibility]="true" appMycolor (colorValue)="getColor($event)">{{name}}</li></ul>
    <p>Color is {{colorValue}}</p>
  `,
  styles: []
})
export class MyComponentComponent implements OnInit {
  @Input('nameList') names: string[];
  private colorValue:string;

  constructor() {
  }

  ngOnInit() {
    //console.log('my container color:'+this.colorValue);
  }
  getColor(val){
    //console.log('color'+val);
    this.colorValue=val;
  }

}
