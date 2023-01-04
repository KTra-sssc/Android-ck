import React from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text,
  Dimensions,
  ScrollView,
} from 'react-native';

const {width} = Dimensions.get('window');

const Taskbar_button = (props) => {
    const {title} = props
    return (
    <View style={styles.taskBarButtonContainer}>
        <Text style={styles.taskbarText}>{title}</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    taskBarButtonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        height: 40,
        flex: 1,
    },
    taskbarText: {
        color: '#575757',
        fontSize: 20,
        fontWeight: '600',
    }, 
})

export default Taskbar_button