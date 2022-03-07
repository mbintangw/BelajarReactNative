import React,{useState} from 'react';
import { Text, View, Image, StyleSheet, ScrollView, Button } from 'react-native';

const AppRelativeAbsolute = () => {
    const [position, setPosition] = useState('relative');
    
    return (
        <View style={{flex:1, flexDirection:'column'}}>
            <View style={{ height:75, backgroundColor: 'powderblue' }} />
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <Text style={[styles.subTitle]}>{position}</Text>
                <View style={[styles.countainer]}>
                    <View style={[styles.box, {backgroundColor: "powderblue", top:0, left:25, position:position }]} />
                    <View style={[styles.box, {backgroundColor: "skyblue", top:25, left:25, position:position }]} />
                    <View style={[styles.box, {backgroundColor: "steelblue", top:50, left:50, position:position }]} />
                </View>
            </View>
            <View style={{height:75, backgroundColor: 'steelblue'}}>
                <View style={[styles.countainer, {justifyContent:'space-evenly', marginTop:10}]} >
                    <Button title="Relative" onPress={() => setPosition('relative')} style={{backgroundColor:"powderblue"}} />
                    <Button title="Absolute" onPress={() => setPosition('absolute')} style={{backgroundColor:"powderblue"}} />
                </View>
            </View>
        </View>
    );
}
export default AppRelativeAbsolute;

const styles = StyleSheet.create({
    box:{
        width: 50,
        height: 50,
    },
    countainer: {
        margin: 10,
        flexDirection: 'row'
    },
    subTitle:{
        marginLeft: 10,
        marginTop: 10,
        fontSize: 20,
        fontWeight: 'bold'
    }
})