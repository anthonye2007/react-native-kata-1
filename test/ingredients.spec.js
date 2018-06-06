import 'react-native';
import React from 'react';
import IngredientsScreen from '../IngredientsScreen';

function findIngredient(ingredients, ingredient) {
  let foundIngredient = false;
  ingredients.forEach((x) => {
    if (x.key === ingredient) {
      foundIngredient = true
    }
  });
  return foundIngredient;
}

describe('Ingredients', () => {

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

  it('should return Tortilla for Tacos', () => {
    const sut = new IngredientsScreen();
    const ingredients = sut.getIngredients('Tacos');
    let foundIngredient = findIngredient(ingredients, 'Tortilla');
    expect(foundIngredient).toBe(true)
  });
});
