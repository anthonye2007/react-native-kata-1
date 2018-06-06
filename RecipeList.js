import React from 'react';
import {FlatList, TouchableHighlight} from 'react-native';
import Recipe from './Recipe';

export default class RecipeList extends React.Component {
  render() {
    return <FlatList testID="recipeList"
                     data={[{key: 'Biscuits and Gravy'}, {key: 'Tacos'}]}
                     renderItem={({item}) =>
                       <TouchableHighlight
                         onPress={() =>
                           this.props.navigation.navigate('Ingredients', {'recipeName': item.key})
                         }
                       >
                         <Recipe recipeName={item.key}/>
                       </TouchableHighlight>
                     }
    />;
  }
}