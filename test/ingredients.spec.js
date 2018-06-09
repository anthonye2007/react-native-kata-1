import 'react-native';
import React from 'react';
import IngredientsScreen from '../IngredientsScreen';
import {hasText} from '../view-integration-tests/test-renderer-helpers';
import TestRenderer from 'react-test-renderer';

function findIngredient(ingredients, ingredient) {
  let foundIngredient = false;
  ingredients.forEach((x) => {
    if (x.key === ingredient) {
      foundIngredient = true
    }
  });
  return foundIngredient;
}

describe('Ingredients integration', () => {
  it('should show one ingredient for the recipe', () => {
    let ingredientList = ["Beef"];
    let renderer = TestRenderer.create(<IngredientsScreen recipeName="Tacos" ingredients={ingredientList}/>);
    let testInstance = renderer.root;
    expect(hasText(testInstance, "Beef")).toBeTruthy();
  });

  it('should show different ingredient for the recipe', () => {
    let ingredientList = ["Salsa"];
    let renderer = TestRenderer.create(<IngredientsScreen recipeName="Tacos" ingredients={ingredientList}/>);
    let testInstance = renderer.root;
    expect(hasText(testInstance, "Salsa")).toBeTruthy();
  });

  it('should show one ingredient for Biscuits and Gravy', () => {
    let ingredientList = ["Gravy"];
    let renderer = TestRenderer.create(<IngredientsScreen recipeName="Biscuits and Gravy" ingredients={ingredientList}/>);
    let testInstance = renderer.root;
    expect(hasText(testInstance, "Gravy")).toBeTruthy();
  });

  it('should show multiple ingredients', () => {
    let ingredientList = ['Foo', 'Bar'];
    let renderer = TestRenderer.create(<IngredientsScreen recipeName='Some recipe' ingredients={ingredientList}/>);
    let ingredientsScreen = renderer.root;
    let ingredients = ingredientsScreen.findAllByProps({testID:'ingredient'});
    expect(ingredients.length).toEqual(2);
  });

  fit('should show no ingredients', () => {
    let ingredientList = [];
    let fakeNavigation = {
      getParam(str) { return 'Tacos'}
    };
    let renderer = TestRenderer.create(
      <IngredientsScreen recipeName='Some recipe' ingredients={ingredientList} navigation={fakeNavigation}/>
    );
    let ingredientsScreen = renderer.root;
    let ingredients = ingredientsScreen.findAllByProps({testID:'ingredient'});
    expect(ingredients.length).toEqual(0);
  });
});

describe('Ingredients', () => {

  it('should return Biscuits for Biscuits and Gravy', () => {
    const sut = new IngredientsScreen();
    const ingredients = sut.getIngredientsForRecipe('Biscuits and Gravy');
    let foundIngredient = findIngredient(ingredients, 'Biscuits');
    expect(foundIngredient).toBe(true)
  });

  it('should return Gravy for Biscuits and Gravy', () => {
    const sut = new IngredientsScreen();
    const ingredients = sut.getIngredientsForRecipe('Biscuits and Gravy');
    let foundIngredient = findIngredient(ingredients, 'Gravy');
    expect(foundIngredient).toBe(true)
  });

  it('should return Beef for Tacos', () => {
    const sut = new IngredientsScreen();
    const ingredients = sut.getIngredientsForRecipe('Tacos');
    let foundIngredient = findIngredient(ingredients, 'Beef');
    expect(foundIngredient).toBe(true)
  });

  it('should return Tortilla for Tacos', () => {
    const sut = new IngredientsScreen();
    const ingredients = sut.getIngredientsForRecipe('Tacos');
    let foundIngredient = findIngredient(ingredients, 'Tortilla');
    expect(foundIngredient).toBe(true)
  });
});
