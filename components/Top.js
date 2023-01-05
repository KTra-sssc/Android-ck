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
    Math

} from 'react-native';
import { SafeAreaView, withSafeAreaInsets } from 'react-native-safe-area-context';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import {TopSlider_image} from '../constants/index'

//const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('screen').height;
const images = TopSlider_image.listSlider[0].listImage;
const WIDTH = Dimensions.get('screen').width;

const Top = () =>{
    const [imgActive, setimgActive] = useState(0)
    const onchange = (nativeEvent) => {
        if(nativeEvent) {
            //const slide = Math.ceil(nativeEvent.contentOffset.x / )
        }
    }
    return (
        <View style={{
            flex: 1,
        }}>
            <View style={{
                flex: 1,
            }}>
                <ScrollView
                    onScroll={({nativeEvent}) => onchange(nativeEvent)}
                    style={styles.wrap}
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
        height: HEIGHT
    }
})

export default Top