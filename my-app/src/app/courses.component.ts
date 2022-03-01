import { Component } from "@angular/core";

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
    courses = ["Course1", "Course2", "Course3"]
}