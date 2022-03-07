import React from 'react';
import { Component } from 'react';
import { Text, View } from 'react-native';

class AppCustomComponentFooter extends Component {
    render() {
        return (
            <View style={{ height: 60, backgroundColor: 'gray' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 32 }}>App Footer Class</Text>
            </View>
        );
    }
}

export default AppCustomComponentFooter
