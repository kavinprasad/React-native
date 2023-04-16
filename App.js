import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import GetStart from './Screens/GetStart';
import Home from './Screens/Home';
import Login from './Screens/Login';
import SignUp from './Screens/SignUp';
import About from './Screens/About';

// Create a Stack Navigator
const Stack = createStackNavigator();

// Wrap your App component with the NavigationContainer and the Stack Navigator
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="GetStart" component={GetStart} options={{ headerShown: false, headerStatusBarHeight: 10 }} />
        <Stack.Screen name="About" component={About} options={{ headerShown: false, headerStatusBarHeight: 10 }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false, headerStatusBarHeight: 0 }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false, headerStatusBarHeight: 0 }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false, headerStatusBarHeight: 0 }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
