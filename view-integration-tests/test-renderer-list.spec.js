import React from 'react';
import TestRenderer from 'react-test-renderer';
import RecipeList from '../RecipeList';
import {hasText} from './test-renderer-helpers';

describe('RecipeList', () => {
  it('should show the text of multiple items', () => {
    const testRenderer = TestRenderer.create(
      <RecipeList recipes={[
        { name: 'My recipe', rating: 5 },
        { name: 'Other favorite', rating: 5 }
      ]}/>
    );
    const testInstance = testRenderer.root;

    expect(hasText(testInstance, 'My recipe')).toBeTruthy();
  });
});
