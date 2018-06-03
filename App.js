/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View, FlatList, Text
} from 'react-native';
import {createStackNavigator} from 'react-navigation';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}

const RootStack = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <RootStack/>
    );
  }
}
