import React from 'react';
import {FlatList, TouchableHighlight, View} from 'react-native';
import Recipe from './Recipe';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <FlatList testID="recipeList"
                  data={[{key: 'Biscuits and Gravy'}, {key: 'Tacos'}]}
                  renderItem={({item}) =>
                    <TouchableHighlight
                      onPress={() =>
                        this.props.navigation.navigate('Ingredients', {'recipeName': item.key })
                      }
                    >
                      <Recipe recipeName={item.key} />
                    </TouchableHighlight>
                  }
        />
      </View>
    );
  }
}
