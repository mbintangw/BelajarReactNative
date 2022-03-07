import React from 'react';
import { View } from 'react-native';
const AppFlexDimensions = () => {
return (
<View style={{flex:1, flexDirection:'row-reverse'}}>
    <View style={{ flex: 1, backgroundColor: 'powderblue' }} />
    <View style={{ flex: 2, backgroundColor: 'skyblue' }} />
    <View style={{ flex: 3, backgroundColor: 'steelblue' }} />
<View style={{backgroundColor: 'powderblue' }} />
<View style={{backgroundColor: 'skyblue' }} />
<View style={{backgroundColor: 'steelblue' }} />
</View>
);
};
export default AppFlexDimensions;
