import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
    selector: 'courses', // div class=> . id=>#
    template: `
    <h2>{{"Title: "+title}}</h2>
    <h2 [textContent]="title"></h2>

    <img src="{{imageUrl}}" /> 
    <img [src]="imageUrl" />
    `
    /* 
    {{variable}} This is called interpolation
    [property]="variable" This is property binding
    
    Interpolarion work well for heading,div tags.
    Everytime variable change property value will be changed.
    Both are okay for binding variables.
    Choose according to your own need.
    */
})
export class CoursesComponent {
    title = "List of courses"
    imageUrl = "https://picsum.photos/200/300"
}