import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screens/Home';
import Ques from '../Screens/Ques';
import Result from '../Screens/result';


const Stack = createNativeStackNavigator();

const MyStack = ()=> {
  return (
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Ques" component={Ques}/>
        <Stack.Screen name="Result" component={Result}/>
      </Stack.Navigator>
  );
}
export default MyStack;


