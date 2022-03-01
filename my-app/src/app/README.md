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