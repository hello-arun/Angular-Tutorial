import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
    selector: 'courses', // div class=> . id=>#
    template: `
{{"Title: "+course.title | uppercase}} <br/>
{{"Rating: "+(course.rating | number:'2.1-2')}} <br/>
{{"Students: "+(course.students|number)}} <br/>
{{"Price: "+(course.price|currency:'INR':true:'3.2-2')}} <br/>
{{"Release Date: "+(course.releaseDate|date:'mediumDate')}} <br/>
`
})
export class CoursesComponent {
    course = {
        title: "The complete course",
        rating: 4.9745,
        students: 30123,
        price: 190.95,
        releaseDate: new Date(2022,1,28)
    }
}