import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DatadrivenComponent } from './datadriven/datadriven.component';
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpService} from "./http.service";
import {HttpModule} from "@angular/http";

@NgModule({
  declarations: [
    AppComponent,
    DatadrivenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule

  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
