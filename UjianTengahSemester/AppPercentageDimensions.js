import React from 'react';
import { View } from 'react-native';

const AppPercentageDimensions = () => {
    return (
     <View style={{ height: '100%' }}>
        <View style={{height: '15%', backgroundColor: 'powderblue'}} />
        <View style={{width: '66%', height: '35%', backgroundColor: 'skyblue'}} />
        <View style={{width: '33%', height: '50%', backgroundColor: 'steelblue'}} />
     </View>
    );
};
export default AppPercentageDimensions;