import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import { Text } from 'react-native';
import {Top} from '../components/index';

const Tab = createMaterialTopTabNavigator();

const Navigator_home = () => {
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
            name="TOP" 
            component={Top} 
            options={{
            tabBarLabel:({color}) => (
            <Text color = {color}>TOP</Text>
            ),
            }}
        />
        <Tab.Screen 
            name="WOMEN" 
            component={Top} 
            options={{
            tabBarLabel:({color}) => (
            <Text color = {color}>WOMEN</Text>
            ),
            }}
        />
        <Tab.Screen 
            name="MEN" 
            component={Top} 
            options={{
            tabBarLabel:({color}) => (
            <Text color = {color}>MEN</Text>
            ),
            }}
        />
        <Tab.Screen 
            name="KIDS" 
            component={Top} 
            options={{
            tabBarLabel:({color}) => (
            <Text color = {color}>KIDS</Text>
            ),
            }}
        />
        <Tab.Screen 
            name="BABY" 
            component={Top} 
            options={{
            tabBarLabel:({color}) => (
            <Text color = {color}>BABY</Text>
            ),
            }}
        />
    </Tab.Navigator>
  );
};

export default Navigator_home;