import React from 'react';
import {Text, View} from 'react-native';

export default function Recipe(props) {
  return (
    <View>
      <Text>{props.recipeName}</Text>
      <Text>{props.rating} stars</Text>
    </View>
  );
}

