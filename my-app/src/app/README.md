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