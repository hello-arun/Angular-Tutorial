import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
    selector: 'courses', // div class=> . id=>#
    template: `
    <button (click)="onSave($event)">Save</button>
    `
})
export class CoursesComponent {
    
    onSave($event: MouseEvent) {
        $event.stopPropagation(); // the event will not bubble up
        // i.e. the container will not respond to this event
        console.log("Button was clicked")
        console.log($event)
    }
}