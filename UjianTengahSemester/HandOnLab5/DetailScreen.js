import * as React from 'react';
import {View, Text, Button, Image} from 'react-native';
export const DetailScreen = ({route, navigation}) => {
  const {itemId} = route.params;
  const movies = [
    { "id": 1103194102, value: 'Agustio', "img": require('./imagess/tio.jpg') },
    { "id": 1103194155, value: 'Mohammad Bintang wicaksono', "img": require('./imagess/bintang.jpeg') },
    { "id": 1103194083, value: 'Daffa Fajar', "img": require('./imagess/daffa.jpeg') },
    { "id": 1103190029, value: 'Harry Prasetya', "img": require('./imagess/harry.jpeg') },
  ];
  const selectedMovie = movies[itemId];
  return (
        <View style={{ flex: 1, backgroundColor:'#DFD8CA' }}>

            <Text>NAMA: {selectedMovie.value}</Text>
            <Text>NIM: {selectedMovie.id}</Text>
            <Image source={selectedMovie.img} style={{
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