import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import { 
    Text, 
    StyleSheet, 
    View, 
    TouchableOpacity, 
    Dimensions, 
    FlatList, 
    Image, 
    SafeAreaView } from 'react-native';
import {Top, Women} from '../components/index';
import { Home_tabbar } from '../constants/index';
import { Component } from 'react/cjs/react.production.min';

const Tab = createMaterialTopTabNavigator()

const Navigator_home = () => {
    const [status, setstatus] = useState('TOP')
    const setStatusFilter = (status) => {
        setstatus(status)
    }
    return (
        <Tab.Navigator 
            screenOptions={{
                swipeEnabled: false,
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
                },
                
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
                component={Women} 
                options={{
                    tabBarLabel: "WOMEN"
                }}
            />
            <Tab.Screen 
                name="MEN" 
                component={Women} 
                options={{
                    tabBarLabel: "MEN"
                }}
            />
            <Tab.Screen 
                name="KIDS" 
                component={Women} 
                options={{
                    tabBarLabel: "KIDS"
                }}
            />
            <Tab.Screen 
                name="BABY" 
                component={Women} 
                options={{
                    tabBarLabel: "BABY"
                }}
            />
        </Tab.Navigator>
        // <SafeAreaView style={styles.container}>
        //     <View style={styles.listTab}>
        //         {Home_tabbar.listTab.map(e => 
        //             <TouchableOpacity 
        //                 key={e}
        //                 style={[styles.btnTap, e === status && styles.btnTapActive]}
        //                 onPress={() => {
        //                     setStatusFilter(e)
        //                 }}
                        
        //             >
        //                 <Text style={[styles.title, e == status && styles.titleTabActive]}>{e}</Text>

        //             </TouchableOpacity>

                    
        //         )}
        //     </View>
        // </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    listTab: {
        flexDirection: 'row',
        backgroundColor: 'white',
        paddingTop: 5,
        justifyContent: 'center',

    },
    btnTap: {
        flex: 1,
        paddingBottom: 10,
    },
    btnTapActive: {
        flex: 1,
        borderBottomColor: 'black',
        borderBottomWidth: 3,
        paddingBottom: 10,
    },
    title: {
        color: '#575757',
        fontSize: 14,
        alignSelf: 'center'
    },
    titleTabActive: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 14,
        alignSelf: 'center'
    }
})
export default Navigator_home;