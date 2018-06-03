/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  FlatList, Text
} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <FlatList testID="recipeList">
        data={[{title: "Biscuits and Gravy"}, {title: "Tacos"}]}
        renderItem={({item}) => <Text> title={item.title} </Text> }
      </FlatList>
    );
  }
}
