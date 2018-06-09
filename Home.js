import React from 'react';
import {FlatList, TouchableHighlight, View} from 'react-native';
import Recipe from './Recipe';
import RecipeList from './RecipeList';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <RecipeList navigation={this.props.navigation} recipes={[
            {name: 'Biscuits and Gravy', rating: 5, ingredients: ['Gravy']},
            {name: 'Tacos', rating: 3}
          ]}
        />
      </View>
    );
  }
}
