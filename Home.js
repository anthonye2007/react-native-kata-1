import React from 'react';
import {View} from 'react-native';
import RecipeList from './RecipeList';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <RecipeList navigation={this.props.navigation} recipes={[
            {name: 'Biscuits and Gravy', rating: 5, ingredients: ['Gravy', 'Biscuits']},
            {name: 'Tacos', rating: 3, ingredients: ['Beef', 'Tortilla']}
          ]}
        />
      </View>
    );
  }
}
