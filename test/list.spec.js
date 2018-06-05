import 'react-native';

import React from 'react';
import { render } from 'enzyme';
import App, {IngredientsScreen} from '../App';

describe('Test setup', () => {
  it('should realize true is true', () => {
    expect(true).toBe(true);
  });
});

describe('Recipe List', () => {
  it('should contain Biscuits and Gravy', () => {
    let component = render(<App />);
    expect(component.text()).toContain('Biscuits and Gravy');
  });

  it('should contain Tacos', () => {
    let component = render(<App />);
    expect(component.text()).toContain('Tacos');
  });
});

function findIngredient(ingredients) {
  let foundIngredient = false;
  ingredients.forEach((ingredient) => {
    if (ingredient.key === 'Biscuits') {
      foundIngredient = true
    }
  });
  return foundIngredient;
}

describe('Ingredients', () => {
  it('should return biscuits for Biscuits and Gravy', () => {
    const sut = new IngredientsScreen();
    const ingredients = sut.getIngredients('Biscuits and Gravy');
    let foundIngredient = findIngredient(ingredients);
    expect(foundIngredient).toBe(true)
  });
});