import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import { Text, StyleSheet } from 'react-native';
import {Top} from '../components/index';

const Tab = createMaterialTopTabNavigator();

const Navigator_home = () => {
  return (
    <Tab.Navigator 
        screenOptions={{
            headerShown: false,
            tabBarIndicatorStyle: {
                backgroundColor: 'black'
            },
            tabBarActiveL: 'black',
            tabBarInactiveTintColor: '#575757',
            tabBarAllowFontScaling: true,
            tabBarLabelStyle: {
                fontWeight: 'bold',
                fontSize: 14,
            }
        }}
    >
        <Tab.Screen 
            name="TOP" 
            component={Top} 
            options={{
                tabBarLabel:"TOP"
            }}
        />
        <Tab.Screen 
            name="WOMEN" 
            component={Top} 
            options={{
                tabBarLabel: "WOMEN"
            }}
        />
        <Tab.Screen 
            name="MEN" 
            component={Top} 
            options={{
                tabBarLabel: "MEN"
            }}
        />
        <Tab.Screen 
            name="KIDS" 
            component={Top} 
            options={{
                tabBarLabel: "KIDS"
            }}
        />
        <Tab.Screen 
            name="BABY" 
            component={Top} 
            options={{
                tabBarLabel: "BABY"
            }}
        />
    </Tab.Navigator>
  );
};

export default Navigator_home;