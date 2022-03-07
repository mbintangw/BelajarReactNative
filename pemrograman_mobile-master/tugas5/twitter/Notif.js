import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, Image } from 'react-native';
import { Searchbar, Button } from 'react-native-paper';
import { BerandaScreen } from './Home';

export const AppNotif = (Navigation) => {
    return (
        <View style={{
            paddingStart:10,
            justifyContent: "space-between",
            flexDirection:"row",
            width:300
        }}>
            <View>
                <Button mode="text" onPress={()=> Navigation.navigate('Home')}>All</Button>
            </View>
            <View><Button mode="text">Reetwet</Button></View>
        </View>


    );
}