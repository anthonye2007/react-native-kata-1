import React from 'react';
import {FlatList, TouchableHighlight} from 'react-native';
import Recipe from './Recipe';

export default class RecipeList extends React.Component {
  transformRecipes(recipes) {
    return recipes.map(recipe => {
      return { key: recipe.name, rating: 5 };
    });
  }

  render() {
    return <FlatList testID="recipeList"
                     data={this.transformRecipes(this.props.recipes)}
                     renderItem={({item}) =>
                       <TouchableHighlight
                         onPress={() =>
                           this.props.navigation.navigate('Ingredients', {'recipeName': item.key})
                         }
                       >
                         <Recipe recipeName={item.key} rating={5}/>
                       </TouchableHighlight>
                     }
    />;
  }
}
