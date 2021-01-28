# Nx Tour of Heroes

An [Nx Monorepo](https://nx.dev/latest/angular/core-concepts/why-monorepos) with [Angular](https://github.com/angular/angular) and [Nest](https://github.com/nestjs/nest), Nest being used for [Angular server-side rendering](https://github.com/angular/universal) and as an API to fetch data from the database. This project repurposes the official [Tour of Heroes](https://angular.io/tutorial) tutorial with the intent of demonstrating the aforementioned setup.

</br>

## Getting Started

---

This project was generated using [Nx](https://nx.dev).

### Installation

- `npm i`

### Development (client-side only rendering)

- `npm start` which will run the database, the Nest API, and the Angular project using [concurrently](https://github.com/kimmobrunfeldt/concurrently#readme)

### Development (server-side rendering)

- `npm run dev:ssr`

### Production

- `npm run build:ssr && npm run serve:ssr`

- Compiles the application and serves it with Universal on the Nest server
