import React from 'react';
import RecipeList from '../RecipeList';

describe('transformRecipes', () => {
  it('should return an object with key pointing to name', () => {
    let original = [{ name: 'My recipe', rating: 5 }];
    let recipeList = new RecipeList();
    let data = recipeList.transformRecipes(original);
    expect(data[0]).toEqual({key: 'My recipe', rating: 5});
  });

  it('should return two objects', () => {
    let original = [{ name: 'My recipe', rating: 5 }, { name: 'My recipe', rating: 5 }];
    let recipeList = new RecipeList();
    let data = recipeList.transformRecipes(original);
    expect(data.length).toBe(2);
  });

  it('should return a different object', () => {
    let original = [{ name: 'Foo', rating: 5 }];
    let recipeList = new RecipeList();
    let data = recipeList.transformRecipes(original);
    expect(data[0]).toEqual({key: 'Foo', rating: 5});
  });
});

