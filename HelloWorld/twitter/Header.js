import React from 'react';
import { View, Image } from 'react-native';

export const AppHeader = () => {
    return (
        <View style={{
            justifyContent: "space-between",
            paddingEnd: 20,
            flex: 1,
            width: 'auto',
            flexDirection: 'row',
        }}>
            <Image style={{
                width: 30,
                height: 30
            }} source={require('./images/man.png')} />
            <Image style={{

                width: 30,
                height: 30
            }} source={require('./images/twitter.png')} />
            <Image style={{

                width: 30,
                height: 30,
                tintColor: "#1d9bf0"
            }} source={require('./images/star.png')} />

        </View>


    );
}