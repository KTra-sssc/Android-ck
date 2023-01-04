import React, {useState, useEffect} from 'react';
import { Text, View, Image, ImageBackground,
    TouchableOpacity,
    Button,
    
} from 'react-native';
import {search_home_button} from '../components/index'


function Home (props) {
    // const [accountTypes, setAccountTypes] = useState([
    //     {
    //       name: 'TOP',
    //       isSelected: false
    //     },
    //     {
    //       name: 'WOMEN',
    //       isSelected: false
    //     },
    //     {
    //       name: 'MEN',
    //       isSelected: false
    //     },
    //     {
    //         name: 'KIDS',
    //         isSelected: false
    //     },
    //     {
    //         name: 'BABY',
    //         isSelected: false
    //     },
    //   ])

      return <View style={{
        backgroundColor: 'white',
        flex: 1
      }}>
        <View style={{
            backgroundColor: 'white',
            flex: 17
        }}>
            
                {/* <search_home_button 
                    onPress={()=>
                        alert('press search')
                    }
                    title= "Ban dang tim san pham gi ?"
                /> */}
        <TouchableOpacity
            // onPress={() =>{
            //     alert("ok")
            // }
            // }
            onPress={()=>{alert('haha')}}
            style={{
                backgroundColor: '#dddddd',
                height: 45,
                borderRadius: 5,
                justifyContent: 'center',
                borderWidth: 1,
                height: 40,
                marginHorizontal: 50,
                marginVertical: 10,
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
        }}>ok</Text>
        </TouchableOpacity>
           
        </View>
        
        <View 
            onPress={()=>{
                alert('ok')
            }}
            style={{
                flex: 73,
                backgroundColor: 'blue'
        }}>
            <Button
                onPress={() => {
                    alert('You tapped the button!');
                }}
                title="Press Me"
            />

        </View>

        <View style={{
            backgroundColor: '#dddddd',
            flex: 10
        }}>

        </View>
      </View>
}

export default Home