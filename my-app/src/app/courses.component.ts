import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
    selector: 'courses', // div class=> . id=>#
    template: `
    <h3>Text Summary</h3>
    {{text|summary}} <br/> <br/>

    <h3>Summary custom limit</h3>
    {{text|summary:25}} <br/> <br/>
    
    <h3>Full Text</h3>
    {{text}} <br/>
`
})
export class CoursesComponent {
    text = `
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
}