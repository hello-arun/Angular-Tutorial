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
