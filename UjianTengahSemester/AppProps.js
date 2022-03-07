import React from 'react';
import { Text, View, Image } from 'react-native';
import {AppHeader, AppContent, AppFooter} from './AppCustomComponents'

const AppProps = () => {
    return (
        <View>
            <AppHeader/>
            <AppContent/>
            <AppFooter footerContent="footer content"/>
        </View>
    )
}
export default AppProps;