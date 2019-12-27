# Nx Demo

This project was generated using [Nx](https://nx.dev).

🔎 **Nx is a set of Extensible Dev Tools for Monorepos.**

## Quick Start & Documentation

[Nx Documentation](https://nx.dev/angular)

[10-minute video showing all Nx features](https://nx.dev/angular/getting-started/what-is-nx)

[Interactive Tutorial](https://nx.dev/angular/tutorial/01-create-application)

## Development server

Run `ng serve nx-demo` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng g component my-component --project=nx-demo` to generate a new component.

## Build

Run `ng build nx-demo` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test nx-demo` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e nx-demo` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev/angular) to learn more.

## Nx Demo Project Directory (work in progress...)

```bash
<project-root>

├── apps
│   ├── api               # public api to retrieve data from backend
│   │   └── ...
│   ├── demo-one          # independently-deployable build
│   │   └── ...
│   ├── demo-one-e2e
│   │   └── ...
│   ├── demo-two          # independently-deployable build
│   │   └── ...
│   ├── demo-two-e2e
│   │   └── ...
├── docs
│   ├── ...
├── libs
│   ├── demo-one           # demo-one lib
│   │   └── data-access
│   │   │   └── ...
│   │   └── feature
│   │   │   └── page-one
│   │   │   │   └── ...
│   │   │   └── page-two
│   │   │   │   └── ...
│   ├── demo-two           # demo-two lib
│   │   └── data-access
│   │   │   └── ...
│   │   └── feature
│   │   │   └── page-one
│   │   │   │   └── ...
│   │   │   └── page-two
│   │   │   │   └── ...
│   ├── shared             # shared libs
│   │   └── animations
│   │   │   └── ...
│   │   └── data-access
│   │   │   └── ...
│   │   └── models
│   │   │   └── ...
│   │   ├── ui             # presentational components
│   │   │   └── accordion
│   │   │       └── ...
├── tools
│   │   └── ...
└── ...
```

## ToDo

- Data fetching using DataPersistence (ngrx)
- e2e
