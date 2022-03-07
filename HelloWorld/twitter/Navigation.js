import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppHeader } from './Header';
import { BerandaScreen } from './Home'
import {Searching } from './Search'
import {View, Image, TextInput, Text} from 'react-native'
import { Appfooter } from './Footer';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AppHome = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator  initialRouteName=""  screenOptions={{
                headerShown: true,
                headerStyle: { backgroundColor: '#000' },
                headerTitleStyle: { fontWeight: 'bold' },
                headerTitle: (props) => <AppHeader {...props}/>,
                  
            }}>
                <Stack.Screen name="Footer" component={MyTabs} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default AppHome;


import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { MessageScreen } from './Message';
import { NotifScreen } from './Notification';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {AppNotif, AppSearching} from './Notif'





function MyTabs() {
    return (
        <Tab.Navigator
            screenOptions={{tabBarStyle:{backgroundColor:"black", borderTopColor:"grey"}}}
        >
            <Tab.Screen
                name="Home"
                component={BerandaScreen}
                options={{
                    
                    tabBarIcon: ({ home }) => (
                        <Image style={{
                            width: 30,
                            height: 30,
                            tintColor:"white"
                            
                        }}
                            source={require('./images/home.png')} />
                    ), headerShown: false, tabBarShowLabel: false, tabBarActiveBackgroundColor:"#1d9bf0"
                }}
            />
            <Tab.Screen
                name="Search"
                component={Searching}
                options={{
                    tabBarIcon: ({ Search }) => (
                        <Image style={{
                            width: 30,
                            height: 30,
                            tintColor: "white"
                        }}
                            source={require('./images/search.png')} />
                    ), headerShown: false, tabBarShowLabel: false, tabBarActiveBackgroundColor: "#1d9bf0"
                }}
             
            />
            <Tab.Screen
                name="notif"
                component={NotifScreen}
                options={{

                    tabBarIcon: ({ notif }) => (
                        <Image style={{
                            width: 30,
                            height: 30,
                            tintColor: "white"
                        }}
                            source={require('./images/bell.png')} />
                    ), headerShown: true, tabBarShowLabel: false, tabBarActiveBackgroundColor: "#1d9bf0", headerTitle: (props) => <AppNotif {...props}/>
                }}
            />
            <Tab.Screen
                name="mail"
                component={MessageScreen}
                options={{

                    tabBarIcon: ({ mail }) => (
                        <Image style={{
                            width: 30,
                            height: 30,
                            tintColor: "white"
                        }}
                            source={require('./images/email.png')} />
                    ), headerShown: false, tabBarShowLabel: false, tabBarActiveBackgroundColor: "#1d9bf0"
                }}
            />
            
            
        </Tab.Navigator>
    );
}
