import SearchScreen from './src/screens/SearchScreen';
import {createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import ResultsShowScreen from './src/screens/ResultsShowScreen';

const navigator = createStackNavigator({
  Search: SearchScreen,
  ResultsShow: ResultsShowScreen
  },
  {
   initialRouteName: 'Search',
   defaultNavigationOptions: {
     title: 'Business Search'
   }

});


export default createAppContainer(navigator);

