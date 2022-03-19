import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  sampleForm!: FormGroup;

  ngOnInit(): void {
    // create an instance of form group
    // for the object passed, the key identifies the control name, the value identifies the actual control
    // the Validators provides validator functions that need to be applied to the control value
    this.sampleForm = new FormGroup({
      'name': new FormControl('', [Validators.required]),
      'emailAddress': new FormControl('', [Validators.required, Validators.email]),
      'age': new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$')])
    });
  }

  handleSubmit() {
    console.log(this.sampleForm.value);
  }

}
