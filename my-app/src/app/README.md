# Angular fundamentals

## 1. Components

### General workflow

1. Create `courses.components.ts`.
2. Register this in `app.module.ts` declaration.
3. Add that element in `app.component.html`.

*Tedious process. Isn't it?*

### Refined workflow

We use the AngularCLI to automate this process. In a new terminal window

```bash
# cd my-app
ng g c ComponentName
# ng Generate Component compName
```

## Ch-09-services

What if we want to get list of courses from an http server?

It is not a good idea to implement it inside the component because it will bind that component to the server. And it restricts the reusability. We will handle this issue in this commit.

*Where we will implement that logic then?*

In Angular we call it *service*

## ch-10-dependency-injection

Well we implmented the fake HTTP server but still we had initialized the fake server in the contructor of [./courses.services.ts] which is also not good.

We will implement dependency injection in this commit.

*Do not forget to Register `CoursesService` in `app.module.ts`*

So after registering CoursesServices in `app.module.ts` we will have only a single instance of `CoursesService` which will be accessible to the whole application and therefore saves whole lot of resources. This is called `Singleton`.

## ch-11-Dep-Inj-From-Angular-CLI

We can use this commmand line to create and register a new service

```bash
# cd my-app
ng g s email
# ng generate service service-name
```

## ch-12-13-15-16 property-attribute-class-style-binding

{{variable}} This is called interpolation

\[property\]="variable"` This is property binding
\[attr.attributeName\]="variable" This is attribute binding
\[class.className\]="variable" This is class binding
\[style.styleProperty\]="variable" This is style binding

Interpolarion work well for heading,div tags.
Everytime variable change property value will be changed.

Both are okay for binding variables.
Choose according to your own need.

## ch-14-bootstrap

*How to add bootstrap css styles?*

```bash
# cd my-app
npm install bootstrap --save
```

`--save` will also add this dependency to package.json

now go to [styles.css](../styles.css) to add bootstrap css styles globally to your project.

`@import "~bootstrap/dist/css/bootstrap.css"`

This line will help

## ch-16-event-binding

Example of event binding

```TypeScript
    <button (click)="onSave($event)">Save</button>
//.
//.
//.
onSave($event: MouseEvent) {
    $event.stopPropagation(); // the event will not bubble up
    // i.e. the parent container will not respond to this event
    console.log("Button was clicked")
    console.log($event)
        
}
```

## ch-17-Event-Filtering-Two-Way-Binding

If we have an input field and want to log the content of the field
to console we can achieve it by following 3 methods

```TypeScript
    <input #email (keyup.enter)="onKeyUpOld(email.value)" />
    <input [value]="betterEmail" (keyup.enter)="betterEmail = ($any($event.target).value);onKeyUpBetter()" />
    <input  [(ngModel)]="modernEmail" (keyup.enter)="onKeyUpModern()"/>
    // Some lines here
    onKeyUpOld(email: string) {
        console.log(email);
    }
    onKeyUpBetter() {
        console.log(this.betterEmail);
    }
    onKeyUpModern() {
        console.log(this.modernEmail);
    }
    // First method is good-old way of doing things
    // Second method implments one way binding but useless too verbose
    // Third one is sweet but we also need to register these property in
    // app.module.ts by adding this import 
import { FormsModule } from '@angular/forms';
//and 
imports: [
    //...,
    FormsModule  // this forms module 
],
```

## ch-18-Pipes

uppercease
lowercase
