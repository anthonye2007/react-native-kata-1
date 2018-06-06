import {shallow} from 'enzyme';
import React from 'react';
import Recipe from '../Recipe';

describe('Recipe', () => {
  it('should have a recipe name', () => {
    let recipe = shallow(<Recipe recipeName='foobar'/>);
    expect(recipe.dive().text()).toContain('foobar');
  });
});
