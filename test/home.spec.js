//https://www.myawesomeserver.com
import HomeScreen from '../Home';
import React from 'react';
import {create} from 'react-test-renderer';


describe('Home', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('makes a network call', () => {
    fetch.mockResponseOnce(JSON.stringify({ data: '12345'}));

    let renderer = create(<HomeScreen/>);
    expect(fetch.mock.calls.length).toEqual(1);
  });
});