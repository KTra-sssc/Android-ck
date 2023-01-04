import React from "react";
import {Text, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

function search_home_button (props) {
    const {onPress, title} = props
    return <TouchableOpacity
        onPress={onPress}
        style={{
            backgroundColor: '#dddddd',
            height: 45,
            borderRadius: 5,
            justifyContent: 'center',

        }}
    >
        {/* <Icon 
            name="far fa-search"
            style={{
                color: '#4d4d4d',
                position: 'absolute',

            }}
        /> */}
        <Text style={{
            color: '#4d4d4d',
            marginRight: 4,
        }}>{title}</Text>
    </TouchableOpacity>
}

export default search_home_button
