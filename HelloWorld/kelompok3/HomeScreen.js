import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../filenavigator/home'
import { AboutScreen } from '../filenavigator/About'
import { ListScreen } from './Listscreen'
import { DetailScreen } from './DetailScreen'
import {View, Image, TextInput} from 'react-native'
const Stack = createNativeStackNavigator();
const AppHome = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="NamaList" screenOptions={{ headerShown: true }} screenOptions={{
                headerShown: true,
                headerStyle: { backgroundColor: '#105652' },
                headerTintColor: '#fff',
                headerTitleStyle: { fontWeight: 'bold' },
               
            }}>
                
                <Stack.Screen name="NamaList" component={ ListScreen } options={{ title:'Kelompok 3' }}/>
                <Stack.Screen name="DetailScreen" component={DetailScreen} options={{ title: 'Profile'}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default AppHome;

const AppHeader = () => {
    return (
        <View style={{
            flex: 1,
            width: 'auto',
            flexDirection: 'row',
            marginLeft: -15,
            paddingLeft: 0
        }}>
           
        </View>
    );
}
