import React, {useState, useEffect} from 'react';
import { 
    Text, 
    View, 
    TouchableOpacity,
    Button,
    ScrollView,
    StyleSheet,
    StatusBar,
    Dimensions,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import {
    Taskbar_button
} from '../components/index'

import {
    Taskbar_button_title,
} from '../constants/index'

let value = ["TOP", "WOMEN", "MEN", "KIDS", "BABY"]

const Home = () => {
    
    return (
        <View style={{
            flex: 1,
        }}>
            <StatusBar barStyle="Light-content"/>
            {/* */}

            <View style={styles.headerContainer}>
                <View style={styles.inputContainer}>
                    <FontAwesome name="search" size={30} color='#575757'/>
                    <Text style={styles.inputText}>Bạn đang tìm sản phẩm gì ?</Text>
                </View>

                <View style={styles.cartContainer}>
                    <FontAwesome name="shopping-cart" size={24} color='#575757'/>
                </View>
            </View>
            {/* */}

            <View style={styles.taskBarContainer}>
                {Taskbar_button_title.title.map(each => 
                    <Taskbar_button title= {each}/>    
                )}
            </View>
            {/* */}
            
            <View style={styles.bodyContainer}>

            </View>
            {/* */}
            
            <View style={styles.tabContainer}>
                <View style={styles.tabButton}>
                    <FontAwesome name="home" size={30} color='#575757'/>
                    <Text>Trang chủ</Text>
                </View>
                <View style={styles.tabButton}>
                    <FontAwesome name="search" size={30} color='#575757'/>
                    <Text>Tìm kiếm</Text>
                </View>
                <View style={styles.tabButton}>
                    <FontAwesome name="heart" size={30} color='#575757'/>
                    <Text>Yêu thích</Text>
                </View>
                <View style={styles.tabButton}>
                    <FontAwesome name="user" size={30} color='#575757'/>
                    <Text>Thành viên</Text>
                </View>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        paddingTop: 10,
        backgroundColor: 'white',
    },
    inputContainer: {
        backgroundColor: '#dddddd',
        flexDirection: 'row',
        flex: 1,
        marginLeft: 10,
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 4,        
    },
    inputText: {
        color: '#575757',
        fontSize: 14,
        marginLeft: 8,
        fontWeight: '500',
    },
    cartContainer: {
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    taskBarContainer: {
        backgroundColor: 'white',
        flexDirection: 'row',
        //flex: 1,
        paddingTop: 15,
        paddingBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
    },

    //body
    bodyContainer: {
        backgroundColor: '#dddddd',
        flex: 1,
        paddingTop: 50,
        
    },

    //tab
    tabContainer: {
        backgroundColor: 'white',
        paddingBottom: 20,
        paddingTop: 10,
        flexDirection: 'row',
        
    },
    tabButton: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    }
});

export default Home