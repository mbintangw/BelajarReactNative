import React from 'react'
import { Text, View, Image } from 'react-native'
import {AppButton} from './AppButton'
import { AppTextInput } from './AppTextInput'
import { AppHeader, AppContent, AppFooter } from './AppCustomComponents'
import { AppState } from './AppState'
import { AppFixedDimension } from './AppFixedDimension'

function abc(){
    return "ini function"
    
}

const HelloWorldApp = () => {
    var string = abc();
    return ( 
        <View>
           <Text style={{fontSize:40, fontFamily:"roboto", fontWeight:'bold'}}>{string}</Text>
        </View>
    );
}
export default HelloWorldApp;