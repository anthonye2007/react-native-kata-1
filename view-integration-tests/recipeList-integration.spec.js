import React from 'react';
import {render} from 'enzyme/build/index';
import RecipeList from '../RecipeList';

describe('RecipeList', () => {
  it('should show the text of multiple items', () => {
    let recipeList = render(<RecipeList recipes={[{ name: 'My recipe', rating: 5 }, { name: 'Other favorite', rating: 5 }]}/>);
    expect(recipeList.text()).toContain('My recipe');
    expect(recipeList.text()).toContain('Other favorite');
  });

  it('should show the recipe rating', () => {
    let recipeList = render(<RecipeList recipes={[{ name: 'My recipe', rating: 5 }]}/>);
    expect(recipeList.text()).toContain("5 stars");
  });

  it('should show different ratings', () => {
    let recipeList = render(<RecipeList recipes={[{ name: 'My recipe', rating: 2 }]}/>);
    expect(recipeList.text()).toContain("2 stars");
  });
});
