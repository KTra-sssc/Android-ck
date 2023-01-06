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
    Image,
} from 'react-native';
import { SafeAreaView, withSafeAreaInsets } from 'react-native-safe-area-context';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {TopSlider_image} from '../constants/index'

//const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('screen').height;
const images = TopSlider_image.listSlider[0].listImage;
const WIDTH = Dimensions.get('screen').width;

const Top = () =>{
    const [imgActive, setimgActive] = useState(0)
    const [imgVertical, setimgVertical] = useState(0)
    const onchange = (nativeEvent) => {
        if(nativeEvent) {
            const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width)
            if(slide != imgActive) {
                setimgActive(slide)
            }
        }
    }
    const onchangeVertical = (nativeEvent) => {
        if(nativeEvent) {
            const slide = Math.ceil(nativeEvent.contentOffset.y / nativeEvent.layoutMeasurement.height)
            if(slide != imgActive) {
                setimgActive(slide)
            }
        }
    }
    return (
        <View style={{
            flex: 1,
        }}>
            <ScrollView
                onScroll={({nativeEvent}) => onchange(nativeEvent)}
                style={styles.wrap}
                showsHorizontalScrollIndicator= {false}
                horizontal
                pagingEnabled
            >
                {images.map((e, index) => 
                    <Image
                        key={e}
                        resizeMode= "contain"
                        style={styles.wrap}
                        source={e}
                    />
                )}
            </ScrollView>
            <View style={styles.wrapdot}>
                {images.map((e, index) =>
                    <FontAwesomeIcon 
                        name='circle'
                        key={e}
                        style={[styles.dotStyle, index == imgActive && styles.dotStyleActive]}
                    />
                )}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        width: WIDTH
    },
    wrap: {
        flex: 1,
        width: WIDTH,
        height: HEIGHT,
        alignSelf: 'center'
    },
    wrapdot: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        alignSelf: 'center',
        paddingBottom: 5,
        alignItems: 'center',
        
             
    },
    dotStyle: {
        paddingHorizontal: 3,
        fontSize: 5,
        color: 'black'
    },
    dotStyleActive: {
        paddingHorizontal: 3,
        fontSize: 10,
        color: 'white',      
    }
})

export default Top