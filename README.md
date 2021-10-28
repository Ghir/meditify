# Introduction

This is a personal project and a base for a mobile application. It consists of two main functionalities: a Home page, that shows a motivational daily quote; a Meditation page, where the user can choose a meditation category, filter the meditations by type, and interact with the media in the modal that opens. Every practice can guide the user through text contents, audio and images.

# Technologies

## Frontend

- [Ionic](https://ionicframework.com/)
- [Capacitor](https://capacitorjs.com/)
- [Angular](https://angular.io/)
- [AngularFire](https://github.com/angular/angularfire)
- [NgRx](https://ngrx.io/)

## Backend

- [Firebase](https://firebase.google.com/)

## Testing And Documentation

- [Cypress](https://www.cypress.io/)
- [Storybook](https://storybook.js.org/)
- [Compodoc](https://compodoc.app/)

# Installation and usage

## Dependencies

Run `npm install` to install all the required dependencies.

## Development server

The app can be run in the browser or in Android and iOS devices / simulators. To open it in the browser, use `npm run start`<br>
To open it in mobile devices, make sure you have all the prerequisites, from the Ionic documentation for [Android](https://ionicframework.com/docs/developing/android) and [iOS](https://ionicframework.com/docs/developing/ios), and then use `npm run open:ios` or `npm run open:android`

## Unit Tests

To run unit tests, use `npm run test`.

To run unit tests in debug mode, use `npm run test:debug`

To run unit tests in dev mode, use `npm run test:develop`

## E2E Tests

To open Cypress e2e tests app, use `npm run cypress:open`

## Linting

Linting is performed by ESLint together with Prettier and [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier).
Run `npm run lint` to lint the project, or `npm run lint:fix` to run Prettier automatically.

## Storybook

To open Storybook, use `npm run storybook`.
To build Stories, use `npm run storybook:build`.

## Compodoc

To open Compodoc, use `npm run compodoc`.
To geneate the documentation json, use `npm run docs:json`.

# Application Design

## Structure

#### Overall Structure

Based on the industry best practices, the code is structured in the following way:

```
src/
    app/
        common/
            ui-lib
        modules
            module-name/
                pages/
                components/
                services/
                guards/
                store/
                utils/
                mocks/
                models/
                constants/
```

#### Common folder

Contains the shared pieces of the application, like a UI Library.

#### Modules folder

Contains all the separate features of the project.

#### Pages folder

Contains `smart` components that are usually called via routes.

#### Components folder

Contains `dumb` components that receive data, render it, and pass events back to smart
components.

#### Store Folder

Each module has its store, with actions, reducers, selectors and effects:

```
store/
    actions/
        feature.actions.ts
    effects/
        feature.effects.ts
    reducers/
        index.ts
        feature.reducers.ts
    selectors/
        feature.selectors.ts
```

## Style And Layout

The application follows the [BEM](http://getbem.com/introduction/) methodology for structuring
components and naming the CSS classes.

The flexbox model is used through [flex-layout](https://github.com/angular/flex-layout)
for creating the layout of components.
