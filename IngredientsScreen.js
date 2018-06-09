import React from 'react';
import {FlatList, Text, View} from 'react-native';

export default class IngredientsScreen extends React.Component {

  getIngredients() {
    let recipe = this.props.navigation.getParam('recipe');
    return recipe.ingredients;
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Ingredients:</Text>
        <FlatList testID='ingredientList'
                  data={this.getIngredients()}
                  renderItem={ ({item}) =>
                    <Text testID='ingredient'>{item}</Text>
                  }
        />
      </View>
    );
  }
}
