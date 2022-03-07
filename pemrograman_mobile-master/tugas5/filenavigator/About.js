import * as React from 'react';
import { View, Text, Button } from 'react-native';
export const AboutScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>About Screen</Text>
            <Button title="Go to Home" onPress={() => navigation.navigate('Home')}/>
            <Button title="ListScreen" onPress={() => navigation.navigate('List')} />
        </View>
    );
}