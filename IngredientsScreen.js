import React from 'react';
import {FlatList, Text, View} from 'react-native';

export default class IngredientsScreen extends React.Component {

  getIngredientsForRecipe(recipeName) {
    return [];
    // const biscuitsAndGravyIngredients = [{key: 'Biscuits'}, {key: 'Gravy'}];
    // const tacoIngredients = [{key: 'Beef'}, {key: 'Tortilla'}];
    // return recipeName === 'Biscuits and Gravy' ? biscuitsAndGravyIngredients : tacoIngredients;
  }

  getIngredients() {
    return this.getIngredientsForRecipe(this.props.navigation.getParam('recipeName'));
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Ingredients</Text>
        {/*<Text>{this.props.recipe.name}</Text>*/}
        <FlatList testID='ingredientList'
                  data={this.getIngredients()}
                  renderItem={ ({item}) =>
                    <Text testID='ingredient'>{item.key}</Text>
                  }
        />
      </View>
    );
  }
}
