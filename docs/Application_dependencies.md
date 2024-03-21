# Applicaiton dependencies

The frontend is made with Angular and a few more things:

- Services to separate concerns and make code more clean and modular
- Bootstrap for styling and icons
- `HtthClientModule` to read `data.json` and fetch product list from assets folder
- `Observable` from `rxjs` module to subscribe to the fetch request
- `BehaviorSubject` from `rxjs` module to update cart count badge on navbar
- `ngModel` and `ngModelChange` for binding form data to component variables
- `ngFor` and `ngIf` in html templates for looping and rendering elements conditionally, respectively
- `@Input` to inject values into child from parent components
- `@Output` and `EventEmitter` to comunicate from child to parent components
- `RouterModule`, `Routes` and `routerLink` for routing to keep app in one page


The backend is made with Typescript and express:

- `espress` and its router for the app
- `jasmine` for unit tests
- `supertest` for unit tests involving networking
- `prettier` for formatting
- `eslint` for code styling
- `bcrypt` for password hashing and salting
- `jsonwebtoken` for authenticating API requests
- `pg` for postgres client
- `db-migrate` for migrations