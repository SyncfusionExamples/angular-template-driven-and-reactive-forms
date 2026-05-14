import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-template-driven',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  handleFormSubmit(form: NgForm): void {
    // value will print the JavaScript Object of the Form Values.
    console.log(form.value);
  }

}
