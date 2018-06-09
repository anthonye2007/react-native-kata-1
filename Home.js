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
    fetch('https://www.google.com').then((response) => response.json())
      .then((responseJson) => {
      console.log('got response!');
      this.state.recipes = responseJson;
      // this.setState({
      //   recipes: responseJson
      // });
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
