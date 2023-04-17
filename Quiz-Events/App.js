import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStackNavigator from './src/navigators/AuthStackNavigator';
import HomeScreen from "./src/screens/HomeScreen";
import SignInScreen from "./src/screens/SignInScreen";
import SignUpScreen from "./src/screens/SignUpScreen";

const App = () => {
  return (
      <NavigationContainer>
      <StatusBar styles='auto' hidden={false}/>
        <AuthStackNavigator/>
      </NavigationContainer>
  );
};
export {HomeScreen, SignInScreen, SignUpScreen};

export default App;

const styles = StyleSheet.create({})