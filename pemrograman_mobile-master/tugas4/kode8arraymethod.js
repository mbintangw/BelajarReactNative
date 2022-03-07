import React from 'react';
import { Component } from 'react';
import { Text, View } from 'react-native';
class AppArrayMethod extends Component {
    render() {
        const buah = ['apple', 'banana', 'orange'];
        return (
            <View>
                <Text>Contoh Penggunaan Array Method</Text>
                {buah.map((item) => (
                    <Text key={item}>{item}</Text>
                ))}
            </View>
        );
    }
}
export default AppArrayMethod;