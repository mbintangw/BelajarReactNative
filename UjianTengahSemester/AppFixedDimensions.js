import React from 'react';
import { View } from 'react-native';

const AppFixedDimensions = () => {
    return (
        <View>
            <View style={{width: 100, height: 100, backgroundColor: 'powderblue'}} />
            <View style={{width: 200, height: 200, backgroundColor: 'skyblue'}} />
            <View style={{width: 300, height: 300, backgroundColor: 'steelblue'}} />
        </View>
    );
};
export default AppFixedDimensions;