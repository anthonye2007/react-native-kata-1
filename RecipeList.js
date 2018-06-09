import React from 'react';
import {FlatList, TouchableHighlight} from 'react-native';
import Recipe from './Recipe';

export default class RecipeList extends React.Component {
  transformRecipes(recipes) {
    return recipes.map(recipe => {
      return { key: recipe.name, rating: recipe.rating };
    });
  }

  render() {
    return <FlatList testID="recipeList"
                     data={this.transformRecipes(this.props.recipes)}
                     renderItem={({item}) =>
                       <TouchableHighlight
                         onPress={() =>
                           this.props.navigation.navigate('Ingredients', {'recipe': item})
                         }
                       >
                         <Recipe recipeName={item.key} rating={item.rating}/>
                       </TouchableHighlight>
                     }
    />;
  }
}
