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

function findIngredient(ingredients, ingredient) {
  let foundIngredient = false;
  ingredients.forEach((x) => {
    if (x.key === ingredient) {
      foundIngredient = true
    }
  });
  return foundIngredient;
}

fdescribe('Ingredients', () => {
  it('should return Biscuits for Biscuits and Gravy', () => {
    const sut = new IngredientsScreen();
    const ingredients = sut.getIngredients('Biscuits and Gravy');
    let foundIngredient = findIngredient(ingredients, 'Biscuits');
    expect(foundIngredient).toBe(true)
  });

  it('should return Gravy for Biscuits and Gravy', () => {
    const sut = new IngredientsScreen();
    const ingredients = sut.getIngredients('Biscuits and Gravy');
    let foundIngredient = findIngredient(ingredients, 'Gravy');
    expect(foundIngredient).toBe(true)
  });

  it('should return Beef for Tacos', () => {
    const sut = new IngredientsScreen();
    const ingredients = sut.getIngredients('Tacos');
    let foundIngredient = findIngredient(ingredients, 'Beef');
    expect(foundIngredient).toBe(true)
  });
});