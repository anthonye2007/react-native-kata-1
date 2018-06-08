import {Text} from 'react-native';

export function getAllText(wrapper) {
  return wrapper.find(Text).reduce((prev, curr) => prev + curr.dive().text(), '');
}
