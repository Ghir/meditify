# Introduction

A personal project and base for a mobile application that will grow with more features. It consists of three main sections:

- Home: motivational daily quote.
- Meditation: choose a category and filter the meditations by type. The practice can be followed through text contents, audio and images.
- Timer: autonomous meditation. The user sets a duration, starts the timer and then saves it when completed. The Stats page displays all the past sessions retrieved from the backend.

&nbsp;

<p float="left">
  <img src="https://user-images.githubusercontent.com/33903713/139341978-27fc71e1-95bb-44e9-b327-ed0106ddb34f.png" width="16%" />
  <img src="https://user-images.githubusercontent.com/33903713/139343073-b7084f56-33f7-486d-a36c-ba5a444f2034.png" width="16%" />
  <img src="https://user-images.githubusercontent.com/33903713/139343058-7e703d0c-1dee-4788-b869-20f6168c2a95.png" width="16%" />
  <img src="https://user-images.githubusercontent.com/33903713/139343037-04bd7c8e-c0ea-4161-83fe-88d40859b4ba.png" width="16%" />
  <img src="https://user-images.githubusercontent.com/33903713/139342979-2c3c4e6b-0d38-4e72-b3f8-812ab694f8e1.png" width="16%" />
  <img src="https://user-images.githubusercontent.com/33903713/139342957-9c8ee005-674e-49c3-aba7-9cc1d905e00f.png" width="16%" />
</p>

&nbsp;

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

The app can be run in the browser or in Android and iOS devices / simulators. To open it in the browser, use `npm run start`.<br>
To open it in mobile devices, make sure you have all the prerequisites (see the Ionic documentation for [Android](https://ionicframework.com/docs/developing/android) and [iOS](https://ionicframework.com/docs/developing/ios)), and then use `npm run open:ios` or `npm run open:android`.

## Unit Tests

To run unit tests, use `npm run test`.

To run unit tests in debug mode, use `npm run test:debug`.

To run unit tests in dev mode, use `npm run test:develop`.

## E2E Tests

To open Cypress e2e tests app, use `npm run cypress:open`.

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

Contains the shared pieces of the application, like the UI Library.

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
to create the layout of components.
