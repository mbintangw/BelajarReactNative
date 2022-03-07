import React from 'react';
import {View, Image} from 'react-native'

export const AppHeader = () => {
    return (
        <View style = {{
            justifyContent: "space-between",
            backgroundColor:'black',
            paddingEnd: 20,
            flex: 1,
            width: 'auto',
            flexDirection: 'row',
            
        }}>
            <Image style={{
                width: 35,
                height: 35
            }} source={require('./images/profile.png')} />
            <Image style={{
                height: 40,
                width: 40
            }} source={require('./images/twitter.png')} />
            <Image style={{
                height: 40,
                width: 40,
                tintColor:'white'
            }} source={require('./images/star.png')} />
            
        </View>
    );
}
