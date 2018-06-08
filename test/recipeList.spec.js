import React from 'react';
import RecipeList from '../RecipeList';

describe('transformRecipes', () => {
  it('should return an object with key pointing to name', () => {
    let original = [{ name: 'My recipe', rating: 5 }];
    let recipeList = new RecipeList();
    let data = recipeList.transformRecipes(original);
    expect(data[0]).toEqual({key: 'My recipe', rating: 5});
  });
});
