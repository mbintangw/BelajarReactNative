import * as React from 'react';
import { View, Text, Button, Image } from 'react-native';

export const DetailScreen = ({ route, navigation }) => {
    const { itemId } = route.params;
    const data = [
        { "id": 1103194102, "value": 'Agustio', "img": require('./tio.jpg') },
        { "id": 1103194155, "value": 'Mohammad Bintang wicaksono', "img": require('./bintang.jpeg') },
        { "id": 1103194083, "value": 'Daffa Fajar', "img": require('./daffa.jpeg') },
        { "id": 1103190029, "value": 'Harry Prasetya', "img": require('./harry.jpeg') },
    ];
    const selceteddata = data[itemId];
    return (
        <View style={{ flex: 1, backgroundColor:'#DFD8CA' }}>

            <Text>NAMA: {selceteddata.value}</Text>
            <Text>NIM: {selceteddata.id}</Text>
            <Image source={selceteddata.img} style={{
                width: 400, height: 490,
                resizeMode: 'contain'
            }} />
            <Button
                title="Go Back"
                onPress={() => navigation.goBack()}
            />
        </View>
    );
}
