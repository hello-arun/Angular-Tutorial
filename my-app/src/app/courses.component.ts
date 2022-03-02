import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
    selector: 'courses', // div class=> . id=>#
    template: `
    <input #email (keyup.enter)="onKeyUpOld(email.value)" />
    <input [value]="betterEmail" (keyup.enter)="betterEmail = ($any($event.target).value); onKeyUpBetter()" />
    <input  [(ngModel)]="modernEmail" (keyup.enter)="onKeyUpModern()"/>
    `
    // [()] Two way binding Banana in a Box model.

})
export class CoursesComponent {

    betterEmail = "better@gmail.com"
    modernEmail = "modern@gmail.com"

    onKeyUpOld(email: string) {
        console.log(email);
    }
    onKeyUpBetter() {
        console.log(this.betterEmail);
    }
    onKeyUpModern() {
        console.log(this.modernEmail);
    }
}