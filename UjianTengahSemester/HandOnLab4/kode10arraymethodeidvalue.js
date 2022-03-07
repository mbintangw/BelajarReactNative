import React from 'react';
import { Component } from 'react';
import { Text, View } from 'react-native';
class AppArrayMethod extends Component {
    render() {
        const buah = [
            { "id": 1, "value": 'Apple' },
            { "id": 2, "value": 'Banana' },
            { "id": 3, "value": 'Orange' },
        ]; 
        return (
            <View>
                <Text>Contoh Penggunaan Array Method</Text>
                {buah.map((item) => (
                    <Text key={item.id}>{item.value}</Text>
                ))}
            </View>
        );
    }
}
export default AppArrayMethod;