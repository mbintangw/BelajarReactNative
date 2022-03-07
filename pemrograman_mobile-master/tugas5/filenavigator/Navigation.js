import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {View,Text,Button} from 'react-native'
import { HomeScreen } from './home';
import { AboutScreen } from './About';


const Stack = createNativeStackNavigator();
const AppHome = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="About">
                <Stack.Screen name="About" component={AboutScreen} />
                <Stack.Screen name="Home" component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default AppHome;

