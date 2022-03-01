import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
    selector: 'courses', // div class=> . id=>#
    template: `
    <h2>{{"Title: "+title}}</h2>
    <ul>
        <li *ngFor="let course of courses">
        {{course}}
        </li>
    </ul>
    `
    /* 
    ` ` are used for multi line input
    *ngFor is some kind of loop function in Angular
    */
})
export class CoursesComponent {
    title = "List of courses"
    courses;

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }

    // Logic for calling an HTTP services
}