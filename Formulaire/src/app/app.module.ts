import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Form1Component } from './form1/form1.component';
import { C1Component } from './c1/c1.component';

import { FormGroup, FormControl, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    C1Component,
    Form1Component
  ],
  imports: [
    BrowserModule, ReactiveFormsModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
