import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
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
    SafeAreaView
} from 'react-native';
import {Top} from '../components/index';
import {Search_tabbar} from '../constants/index'

const Tab = createBottomTabNavigator();

const Navigator_search = () => {
    const [status, setstatus] = useState('TOP')
    const setStatusFilter = (status) => {
        setstatus(status)
    }
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
        // <SafeAreaView style={styles.container}>
        //     <View style={styles.listTab}>
        //         {Search_tabbar.listTab.map(e => 
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

export default Navigator_search;