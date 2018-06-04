/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View, FlatList, Text, Button, TouchableHighlight, Alert
} from 'react-native';
import {createStackNavigator} from 'react-navigation';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <FlatList testID="recipeList"
                  data={[{key: 'Biscuits and Gravy'}, {key: 'Tacos'}]}
                  renderItem={({item}) =>
                    <TouchableHighlight
                      onPress={() => Alert.alert('Touched') }
                    >
                      <Text>{item.key}</Text>
                    </TouchableHighlight>
                  }
        />

        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}

const RootStack = createStackNavigator({
  Home: HomeScreen,
  Details: DetailsScreen,
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
