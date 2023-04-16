// Import the required libraries
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AddNew from './Screens/AddNew';
import Home from './Screens/Home';

// Create a Stack Navigator
const Stack = createStackNavigator();

// Wrap your App component with the NavigationContainer and the Stack Navigator
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false, headerStatusBarHeight: 0 }} />
        <Stack.Screen name="AddNew" component={AddNew} options={{ headerShown: false, headerStatusBarHeight: 0 }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
