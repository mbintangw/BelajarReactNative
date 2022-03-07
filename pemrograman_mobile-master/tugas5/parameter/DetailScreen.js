import * as React from 'react';
import { View, Text, Button, Image } from 'react-native';

export const DetailScreen = ({ route, navigation }) => {
    const { itemId } = route.params;
    const movies = [
        { "id": 0, "value": 'The Squid Game', "img": require('../image/Squid-Game.png') },
        { "id": 1, "value": 'Hometown Cha Cha Cha', "img": require('../image/chahca.jpg') },
        { "id": 2, "value": 'Eternal', "img": require('../image/eternals.jpg') },
        { "id": 3, "value": 'Spider-Man: No Way Home', "img": require('../image/spiderman.png') },
    ];
    const selectedMovie = movies[itemId];
    return (
        <View style={{ flex: 1 }}>
            <Text>Detail Screen</Text>
            <Text>Movie ID: {selectedMovie.id}</Text>
            <Text>Movie Title: {selectedMovie.value}</Text>
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
