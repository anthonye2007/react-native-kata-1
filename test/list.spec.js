import 'react-native';

import React from 'react';
import { render } from 'enzyme';
import App from '../App';

describe('Test setup', () => {
  it('should realize true is true', () => {
    expect(true).toBe(true);
  });
});

describe('Recipe List', () => {
  it('should contain Biscuits and Gravy', () => {
    let component = render(<App />);
    expect(component.text()).toContain('Biscuits and Gravy');
  });

  it('should contain Tacos', () => {
    let component = render(<App />);
    expect(component.text()).toContain('Tacos');
  });
});