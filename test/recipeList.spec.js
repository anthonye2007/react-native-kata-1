import {FlatList} from 'react-native';

import React from 'react';
import { shallow } from 'enzyme';
import RecipeList from '../RecipeList';

describe('Recipe list', () => {
  it('should have a list', () => {
    let wrapper = shallow(<RecipeList />);
    expect(wrapper.find(FlatList).length).toBe(1);
  });
});
