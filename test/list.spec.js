import 'react-native';

import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '../App';

describe('Test setup', () => {
  it('should realize true is true', () => {
    expect(true).toBe(true);
  });
});

describe('Recipe List', () => {
  it('should contain Biscuits and Gravy', () => {
    let dom = render(<App />);
    expect(dom.text()).toContain('Biscuits and Gravy');
  });
});