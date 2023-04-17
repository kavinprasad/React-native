import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import AuthStackNavigator from './navigators/AuthStackNavigator';

export default function index() {
  return (
    <View>
    <Text>index</Text>
  </View>
    // <NavigationContainer>
    //     <AuthStackNavigator/>
    // </NavigationContainer>
  )
}

const styles = StyleSheet.create({})
