import IngredientsScreen from './IngredientsScreen';
import Home from './Home';
import {createStackNavigator} from 'react-navigation';

export default RootStack = createStackNavigator({
    Home: Home,
    Ingredients: IngredientsScreen
  },
  {
    initialRouteName: 'Home'
  }
);
