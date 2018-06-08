import React from 'react';
import {render} from 'enzyme/build/index';
import RecipeList from '../RecipeList';

describe('RecipeList', () => {
  it('should show the text of multiple items', () => {
    let wrapper = render(<RecipeList recipes={['My recipe', 'Other favorite']}/>);
    expect(wrapper.text()).toContain('My recipe');
    expect(wrapper.text()).toContain('Other favorite');
  });
});
