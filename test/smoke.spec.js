import 'react-native';

import React from 'react';
import { render } from 'enzyme';
import App from '../App';

describe('Recipe List smoke test', () => {
  it('should contain Biscuits and Gravy', () => {
    let component = render(<App />);
    expect(component.text()).toContain('Biscuits and Gravy');
  });
});
