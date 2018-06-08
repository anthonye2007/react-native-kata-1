import React from 'react';
import {render} from 'enzyme/build/index';
import RecipeList from '../RecipeList';

describe('RecipeList', () => {
  it('should show the text of the first item', () => {
    let wrapper = render(<RecipeList />);
    expect(wrapper.text()).toContain('Biscuits and Gravy');
  });
});
