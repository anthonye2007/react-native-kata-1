import React from 'react';
import {FlatList, Text, View} from 'react-native';

export default class IngredientsScreen extends React.Component {

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
