import React from 'react';
import {View} from 'react-native';
import RecipeList from './RecipeList';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [
        // {name: 'Biscuits and Gravy', rating: 5, ingredients: ['Gravy', 'Biscuits']},
        // {name: 'Tacos', rating: 3, ingredients: ['Beef', 'Tortilla']}
      ]
    };
  }

  componentWillMount() {
    fetch('https://www.myawesomeserver.com').then((response) => {
      console.log('got response!');
      // this.state = response.data;
    }).catch((error) => {
      console.error('response failed');
    })
  }



  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <RecipeList navigation={this.props.navigation} recipes={this.state.recipes} />
      </View>
    );
  }
}
