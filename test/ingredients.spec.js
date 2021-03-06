import 'react-native';
import React from 'react';
import IngredientsScreen from '../IngredientsScreen';
import {hasText} from '../view-integration-tests/test-renderer-helpers';
// noinspection ES6CheckImport
import {create} from 'react-test-renderer';

describe('Ingredients', () => {
  it('should show ingredient name', () => {
    let fakeNavigation = {
      getParam(str) {
        let recipe = {name: 'Foobar', rating: 5, ingredients: ['Beef']};
        return str === 'recipe' ? recipe : undefined;
      }
    };
    let renderer = create(
      <IngredientsScreen navigation={fakeNavigation}/>
    );
    let testInstance = renderer.root;
    expect(hasText(testInstance, "Beef")).toBeTruthy();
  });

  it('should show multiple ingredients', () => {
    let fakeNavigation = {
      getParam(str) {
        let recipe = {name: 'Foobar', rating: 5, ingredients: ['Foo', 'Bar']};
        return str === 'recipe' ? recipe : undefined;
      }
    };
    let renderer = create(
      <IngredientsScreen navigation={fakeNavigation}/>
    );
    let ingredientsScreen = renderer.root;
    let ingredients = ingredientsScreen.findAll(node => node.type === 'Text' && node.props.testID === 'ingredient');
    expect(ingredients.length).toEqual(2);
  });

  it('should show no ingredients', () => {
    let fakeNavigation = {
      getParam(str) {
        let recipe = {name: 'Foobar', rating: 5, ingredients: []};
        return str === 'recipe' ? recipe : undefined;
      }
    };
    let renderer = create(
      <IngredientsScreen navigation={fakeNavigation}/>
    );
    let ingredientsScreen = renderer.root;
    let ingredients = ingredientsScreen.findAllByProps({testID:'ingredient'});
    expect(ingredients.length).toEqual(0);
  });

  describe('getIngredients', () => {
    it('should return an item with a key', () => {
      let screen = new IngredientsScreen();
      let recipe = { key: 'Tacos', rating: 5, ingredients: ['Beef'] };
      let ingredients = screen.getIngredients(recipe);
      expect(ingredients).toEqual([{key: 'Beef'}]);
    });
  });
});
