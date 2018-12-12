import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {
  myForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'nom': new FormControl(),
      'age': new FormControl(),
      'ville': new FormControl()
    });
   }

  ngOnInit() {
  }

  afficherForm() {
    alert(JSON.stringify(this.myForm.value));
  }
  enregistrer(myForm) {
    console.log(myForm.value);
  }

}
