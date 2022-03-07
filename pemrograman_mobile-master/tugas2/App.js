import React from 'react'
import { Text, View, Image } from 'react-native'
import {AppHeader, AppContent} from './AppCustomComponents'


const HelloWorldApp = () => {
    return ( 
        <View>
            <AppHeader/>
            <AppContent/>
        
        </View>
    )
}
export default HelloWorldApp;