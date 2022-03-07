import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const AppState = () => {
    const [count, setCount] = useState(0);
    
    return (
        <View style={styles.container}>
            <Text>You clicked {count} times</Text>
            <Button
                onPress={() => setCount(count + 1)}
                title="Click me!"
            />
        </View>
    );
};

export default AppState;

// React Native Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
