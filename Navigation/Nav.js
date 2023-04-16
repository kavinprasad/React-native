import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import CourseScreen from '../screens/CourseScreen';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';


const Tab = createMaterialBottomTabNavigator();

function BottomTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
          initialRouteName="Home"
          activeColor="#689F38"
          inactiveColor="#666666"
          barStyle={{ backgroundColor: '#ffffff' }}
          initialRouteName = "Home" 
          screenOptions={({route}) => ({
            tabBarIcon: ({focused ,color , size }) => {
              let iconName;
              
              if(route.name === 'Home'){
                iconName = focused
                ? 'ios-home-outline'
                : 'ios-home-outline';
              }else if(route.name === 'Course' ){
                iconName = focused ? 'ios-videocam-outline' : 'ios-videocam-outline';
              }else if(route.name === 'Account' ){
                iconName = focused ? 'ios-person-circle-outline' : 'ios-person-circle-outline';
              }
            return <Ionicons name={iconName} size={25} color={color}/>
            }
              
            })}
            >
            

          <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarBadge: 3 }}/>
          <Tab.Screen name="Course" component={CourseScreen} />
          <Tab.Screen name="Account" component={HomeScreen} />
          
      </Tab.Navigator>
    </NavigationContainer>
  );
}


export default (BottomTabs);

