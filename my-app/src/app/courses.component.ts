import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
    selector: 'courses', // div class=> . id=>#
    template: `
    <h2>{{"Title: "+title}}</h2>
    <button class="btn btn-primary">Save</button>
    <h2 [textContent]="title"></h2>
    <table>
    <tr>
        <td [attr.colSpan]="colSpan"></td>
    </tr>
    </table>
    <img src="{{imageUrl}}" /> 
    <img [src]="imageUrl" />
    `
    /* 
    We have added the blue button to template.
    {{variable}} This is called interpolation
    [property]="variable" This is property binding
    [attr.attributeName]="variable" This is attribute binding

    Interpolarion work well for heading,div tags.
    Everytime variable change property value will be changed.
    Both are okay for binding variables.
    Choose according to your own need.

    */
})
export class CoursesComponent {
    colSpan=2
    title = "List of courses"
    imageUrl = "https://picsum.photos/200/300"
}