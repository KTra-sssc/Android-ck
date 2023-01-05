import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import { Text } from 'react-native';
import {Top} from '../components/index';

const Tab = createMaterialTopTabNavigator();

const Navigator_search = () => {
  return (
    <Tab.Navigator 
        tabBarOptions={{
            activeTintColor: 'black',
            inactiveTintColor: '#575757',
        }}
        screenOptions={{
            headerShown: false
        }}
    >
        <Tab.Screen 
            name="NỮ" 
            component={Top} 
            options={{
            tabBarLabel:({color}) => (
            <Text color= {color}>NỮ</Text>
            ),
            }}
        />
        <Tab.Screen 
            name="NAM" 
            component={Top} 
            options={{
            tabBarLabel:({color}) => (
            <Text color = {color}>NAM</Text>
            ),
            }}
        />
        <Tab.Screen 
            name="TRẺ EM" 
            component={Top} 
            options={{
            tabBarLabel:({color}) => (
            <Text color = {color}>TRẺ EM</Text>
            ),
            }}
        />
        <Tab.Screen 
            name="TRẺ SƠ SINH" 
            component={Top} 
            options={{
            tabBarLabel:({color}) => (
            <Text color = {color}>TRẺ SƠ SINH</Text>
            ),
            }}
        />
    </Tab.Navigator>
  );
};

export default Navigator_search;