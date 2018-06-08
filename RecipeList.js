import React from 'react';
import {FlatList, TouchableHighlight} from 'react-native';
import Recipe from './Recipe';

export default class RecipeList extends React.Component {
  transformRecipes(recipes) {
    return [{ key: 'My recipe', rating: 5 }];
    // { recipes.map(recipe => {
    //   //recipes={[{ name: 'My recipe', rating: 5 }]
    //   return { key: recipe.name }
    // })}
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
