import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateDrivenComponent } from './components/template-driven/template-driven.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TemplateDrivenComponent, ReactiveFormComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Forms';
}
