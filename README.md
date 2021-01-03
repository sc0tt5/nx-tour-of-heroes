# Nx Tour of Heroes

Currently transitioning the project from the original "demo" to using the Angular Tour of Heroes. This is currently a work in progress. Additional updates coming soon. See issues for details.

</br>

# Nx Demo (original README)

This project was generated using [Nx](https://nx.dev).

🔎 **Nx is a set of Extensible Dev Tools for Monorepos.**

## Quick Start & Documentation

[Nx Documentation](https://nx.dev/angular)

[10-minute video showing all Nx features](https://nx.dev/angular/getting-started/what-is-nx)

[Interactive Tutorial](https://nx.dev/angular/tutorial/01-create-application)

## Development server (client-side only rendering)

Run `ng serve api` to run the API server. Then run `ng serve --open` for the dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Production (also for testing SSR and pre-rendering locally)

**`npm run build:ssr && npm run serve:ssr`** - Compiles your application and spins up Node Express (NestJS) to serve your Universal application on `http://localhost:3333`.

**`npm run prerender`** - Compiles your application and prerenders your applications files.
**Note**: To deploy your static site to a static hosting platform you will have to deploy the `dist/browser` folder, rather than the usual `dist`

## Code scaffolding

Run `ng g component my-component --project=nx-demo` to generate a new component.

## Build

Run `ng build nx-demo` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test nx-demo` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev/angular) to learn more.

## Nx Demo Project Directory (work in progress...)

Here's a [great article](https://medium.com/showpad-engineering/how-to-organize-and-name-applications-and-libraries-in-an-nx-monorepo-for-immediate-team-wide-9876510dbe28) used for this project structure and naming convention.

```bash

# Applications
/apps/<scope-1>
/apps/<scope-2>

# Libraries
/libs/<scope-1>/<type-1>/<lib-name>
/libs/<scope-1>/<type-2>/<lib-name>
/libs/<scope-2>/<type-1>/<lib-name>
/libs/<scope-2>/<type-2>/<lib-name>
```

## NGRX

Install [Redux Devtools Extension](https://github.com/zalmoxisus/redux-devtools-extension) for Chrome. Invaluable tool for debugging your store.
