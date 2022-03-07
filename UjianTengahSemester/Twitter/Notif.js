import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, Image } from 'react-native';
import { Searchbar, Button } from 'react-native-paper';
import ImageBackground from 'react-native/Libraries/Image/ImageBackground';
import { BerandaScreen } from './Home';

export const AppNotif = ({navigation}) => {
    return (
        <View style={{
            paddingStart:10,
            justifyContent: "space-between",
            flexDirection:"row",
            width:300,
            backgroundColor:'black'
        }}>
            <View>
                <Button mode="text">All</Button>
            </View>
            <View><Button mode="text">Reetwet</Button></View>
        </View>


    );
}