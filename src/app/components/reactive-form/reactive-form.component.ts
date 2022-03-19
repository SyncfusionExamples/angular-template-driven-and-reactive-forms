import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  sampleForm!: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
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
