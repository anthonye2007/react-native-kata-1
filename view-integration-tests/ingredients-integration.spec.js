import React from 'react';
import TestRenderer from 'react-test-renderer';
import IngredientsScreen from '../IngredientsScreen';
import {hasText} from './test-renderer-helpers';


describe('Ingredients', () => {
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
});
