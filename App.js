import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import Home from './screens/Home';
import Search from './screens/Search';
import Favorite from './screens/Favorite';
import Profile from './screens/Profile';


const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "#575757",
          tabBarStyle: [
            {
              display: "flex"
            },
            null
          ],
            title: '',
            headerShown: false
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Trang chủ',
            tabBarIcon: ({color}) => (
              <FontAwesome name="home" size={30} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarLabel: 'Tìm kiếm',
            tabBarIcon: ({color}) => (
              <FontAwesome name="search"size={30} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Favorite"
          component={Favorite}
          options={{
            tabBarLabel: 'Yêu thích',
            tabBarIcon: ({color}) => (
              <FontAwesome name="heart" size={30} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Cá nhân',
            tabBarIcon: ({color}) => (
              <FontAwesome name="user" size={30} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;