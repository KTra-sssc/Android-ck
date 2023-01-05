import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import { Text } from 'react-native';
import {Top} from '../components/index';

const Tab = createMaterialTopTabNavigator();

const Navigator_search = () => {
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
            name="NỮ" 
            component={Top} 
            options={{
            tabBarLabel: "NỮ"
            }}
        />
        <Tab.Screen 
            name="NAM" 
            component={Top} 
            options={{
            tabBarLabel: "NAM"
            }}
        />
        <Tab.Screen 
            name="TRẺ EM" 
            component={Top} 
            options={{
            tabBarLabel: "TRẺ EM"
            }}
        />
        <Tab.Screen 
            name="TRẺ SƠ SINH" 
            component={Top} 
            options={{
            tabBarLabel: "TRẺ SƠ SINH" 
            }}
        />
    </Tab.Navigator>
  );
};

export default Navigator_search;