import { Component } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { Project } from "./project";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  projects:Project[];
  form: FormGroup;

  constructor() { 
    // Create sample projects
    this.projects = [
      new Project("Project 1"),
      new Project("Project 2")
    ]

    // Setup form
    this.form = new FormGroup({
      project: new FormControl(this.projects)      
    });
  }
}