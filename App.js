/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View testID="recipeList">
        <Text>
          Biscuits and Gravy
        </Text>
        <Text>
          Tacos
        </Text>
      </View>
    );
  }
}
