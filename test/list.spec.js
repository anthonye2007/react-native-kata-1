import 'react-native';

import React from 'react';
import { render } from 'enzyme';
import App from '../App';

xdescribe('Recipe List', () => {
  it('should contain Biscuits and Gravy', () => {
    let component = render(<App />);
    expect(component.text()).toContain('Biscuits and Gravy');
  });

  it('should contain Tacos', () => {
    let component = render(<App />);
    expect(component.text()).toContain('Tacos');
  });
});
