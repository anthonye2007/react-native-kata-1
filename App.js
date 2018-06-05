import React, { Component } from 'react';
import {createStackNavigator} from 'react-navigation';
import Home from './Home';
import IngredientsScreen from './IngredientsScreen';

const RootStack = createStackNavigator({
  Home: Home,
  Ingredients: IngredientsScreen
},
  {
    initialRouteName: 'Home'
  }
);

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <RootStack/>
    );
  }
}
