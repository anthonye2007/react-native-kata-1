/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View, FlatList, Text, TouchableHighlight
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
                      onPress={() =>
                        this.props.navigation.navigate('Ingredients', {'recipeName': item.key })
                      }
                    >
                      <Text>{item.key}</Text>
                    </TouchableHighlight>
                  }
        />
      </View>
    );
  }
}

export class IngredientsScreen extends React.Component {

  getIngredients(recipeName) {
    const biscuitsAndGravyIngredients = [{key: 'Biscuits'}, {key: 'Gravy'}];
    const tacoIngredients = [{key: 'Beef'}, {key: 'Tortilla'}];
    return recipeName === 'Biscuits and Gravy' ? biscuitsAndGravyIngredients : tacoIngredients;
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text testID='ingredients'>Ingredients</Text>
        <Text>{this.props.navigation.getParam('recipeName')}</Text>
        <FlatList testID='ingredientList'
                  data={this.getIngredients(this.props.navigation.getParam('recipeName'))}
                  renderItem={ ({item}) =>
                    <Text>{item.key}</Text>
                  }
        />
      </View>
    );
  }
}

const RootStack = createStackNavigator({
  Home: HomeScreen,
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
