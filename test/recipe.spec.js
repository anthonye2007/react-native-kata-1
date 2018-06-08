import {shallow} from 'enzyme';
import React from 'react';
import Recipe from '../Recipe';
import {getAllText} from './helpers';

describe('Recipe', () => {
  it('should have a recipe name', () => {
    let recipe = shallow(<Recipe recipeName='foobar'/>);
    expect(getAllText(recipe)).toContain('foobar');
  });

  it('should have a rating', () => {
    let recipe = shallow(<Recipe recipeName='foobar' rating='5'/>);
    expect(getAllText(recipe)).toContain('5 stars');
  });
});
