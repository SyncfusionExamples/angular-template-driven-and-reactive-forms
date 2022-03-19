import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { TemplateDrivenComponent } from './components/template-driven/template-driven.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponent,
    TemplateDrivenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
