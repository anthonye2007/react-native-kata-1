import React from 'react';
import {FlatList, Text, View} from 'react-native';

export default class IngredientsScreen extends React.Component {

  getIngredients(recipe) {
    return recipe.ingredients.map(ingredient => {
      return { key: ingredient };
    });
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Ingredients:</Text>
        <FlatList testID='ingredientList'
                  data={this.getIngredients(this.props.navigation.getParam('recipe'))}
                  renderItem={ ({item}) =>
                    <Text testID='ingredient'>{item.key}</Text>
                  }
        />
      </View>
    );
  }
}
