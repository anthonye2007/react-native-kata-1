# Objective of Kata

Get familiar with react-native tooling and development experience.

## Features

### Display List of Recipes

Given I have recipe 'Biscuits and Gravy'
And I have recipe 'Tacos'
When I open the 'Top Notch Recipes'
Then I should see two recipes
And I should see the average rating of each recipe

### Display Recipe Detail

Given I have recipe 'Biscuits and Gravy'
When I view 'Biscuits and Gravy'
Then I should see ingredients for 'Biscuits and Gravy'
And I should see the average rating for the recipe

## Api Definition

The recipes should be retrieved using the api definition found [here](./swagger.json)

## Expectations

* Setup a new react-native application using `create-react-native-app`.
* Create unit tests using Jest
* Create Acceptance Tests using Detox
* Run unit tests using yarn
* Run Acceptance Tests using yarn
* Use native components in react-native

## Tooling

* [Nodejs](https://nodejs.org/en/)
  * JavaScript runtime
* [Yarn](https://yarnpkg.com/en/)
  * Facebook created package manager commonly used inplace of npm.
* [React Native Cli](https://www.npmjs.com/package/react-native-cli)
  * Used to run react-native apps
* [Create React Native App](https://github.com/react-community/create-react-native-app)
  * Used to create an initial react-native app.
* [Detox](https://github.com/wix/detox)
  * End-to-End testing tool
* [Jest](https://facebook.github.io/jest/)
  * Unit testing framework

## Warning

* React-Native <= 0.55.x does not work with node 10.x.x.