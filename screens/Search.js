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
import Navigator_search from '../utilities/Navigator_search'
const Search = () =>{
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
            </View>
            {/* */}

            <View style={styles.bodyContainer}>
                <Navigator_search/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: 'white',
    },
    inputContainer: {
        backgroundColor: '#dddddd',
        flexDirection: 'row',
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
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

    //body
    bodyContainer: {
        backgroundColor: '#dddddd',
        flex: 1,
        
    },
});

export default Search;