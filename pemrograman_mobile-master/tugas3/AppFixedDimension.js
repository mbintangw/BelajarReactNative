import React from "react";
import {View} from "react-native"

export const AppFixedDimension = () =>{
    return(
        <View style={{ flex: 1 }}>
            <View style={{ backgroundColor: 'powderblue' }} />
            <View style={{ backgroundColor: 'skyblue' }} />
            <View style={{ backgroundColor: 'steelblue' }} />
        </View>

    );
}