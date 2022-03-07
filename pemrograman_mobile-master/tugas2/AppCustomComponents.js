import React from 'react';
import { Text, View, Image, Button } from 'react-native';

export const AppHeader = () => {
    return(
        <View style={{height:60, backgroundColor:'aqua'}}>
            <Text style={{fontWeight: 'bold', fontSize: 32}}>Teknik Komputer Apps</Text>
        </View>
    );
}

export const AppContent = () => {
    return(
        <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={{fontWeight: 'bold', fontSize:23}}>NAMA : AGUSTIO</Text>
            <Text style={{ fontWeight: 'bold', fontSize: 23}}>NIM :1103194102</Text>
            <Image source={{ uri: 'https://reactjs.org/logo-og.png' }}
                style={{ width: 400, height: 400 }} />
            <Button
                title="Press me"
                onPress={() => Alert.alert('Simple Button pressed')}
            />
        </View>
    );
}

