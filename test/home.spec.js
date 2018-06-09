//https://www.myawesomeserver.com
import HomeScreen from '../Home';
import React from 'react';
import {create} from 'react-test-renderer';
import {hasText} from '../view-integration-tests/test-renderer-helpers';


describe('Home', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('should make a network call', () => {
    fetch.mockResponseOnce(JSON.stringify({ data: '12345'}));

    let homeScreen = new HomeScreen();
    homeScreen.componentWillMount();
    expect(fetch.mock.calls.length).toEqual(1);
  });

  it('should set recipes', () => {
    let recipes = [
      {name: 'Foo', rating: 5, ingredients: ['thing one', 'thing two']}
    ];
    // {name: 'Biscuits and Gravy', rating: 5, ingredients: ['Gravy', 'Biscuits']},
    // {name: 'Tacos', rating: 3, ingredients: ['Beef', 'Tortilla']}
    fetch.mockResponseOnce(JSON.stringify(recipes));
    // let homeScreen = new HomeScreen();
    // homeScreen.componentWillMount();
    // expect(homeScreen.state.recipes).toEqual(recipes);
    let renderer = create(<HomeScreen />);
    let screen = renderer.root;
    expect(hasText(screen, 'Foo')).toBeTruthy();
    // expect(screen.findByProps({ recipes: 'blah' }).length).toEqual(1);
  });
});