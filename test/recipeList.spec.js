import React from 'react';
import { shallow } from 'enzyme';
import RecipeList from '../RecipeList';

describe('Recipe list', () => {
  it('should have a list', () => {
    let wrapper = shallow(<RecipeList recipes={['test']}/>);
    expect(wrapper.exists()).toBe(true);
  });
});
