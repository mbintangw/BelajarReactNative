import React from 'react';
import { Text, View, Image, StyleSheet, ScrollView } from 'react-native';

const AppJustifyContent = () => {
    return (
        <View style={{flex:1, flexDirection:'column'}}>
            <View style={{ height:75, backgroundColor: 'powderblue' }} />
            <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
                <Text style={[styles.subTitle]}>flex-start</Text>
                <View style={[styles.countainer, {justifyContent:'flex-start'}]}>
                    <View style={[styles.box, { backgroundColor: "powderblue" }]} />
                    <View style={[styles.box, { backgroundColor: "skyblue" }]} />
                    <View style={[styles.box, { backgroundColor: "steelblue" }]} />
                </View>

                <Text style={[styles.subTitle]}>flex-end</Text>
                <View style={[styles.countainer, {justifyContent:'flex-end'}]}>
                    <View style={[styles.box, { backgroundColor: "powderblue" }]} />
                    <View style={[styles.box, { backgroundColor: "skyblue" }]} />
                    <View style={[styles.box, { backgroundColor: "steelblue" }]} />
                </View>

                <Text style={[styles.subTitle]}>center</Text>
                <View style={[styles.countainer, {justifyContent:'center'}]}>
                    <View style={[styles.box, { backgroundColor: "powderblue" }]} />
                    <View style={[styles.box, { backgroundColor: "skyblue" }]} />
                    <View style={[styles.box, { backgroundColor: "steelblue" }]} />
                </View>

                <Text style={[styles.subTitle]}>space-between</Text>
                <View style={[styles.countainer, {justifyContent:'space-between'}]}>
                    <View style={[styles.box, { backgroundColor: "powderblue" }]} />
                    <View style={[styles.box, { backgroundColor: "skyblue" }]} />
                    <View style={[styles.box, { backgroundColor: "steelblue" }]} />
                </View>

                <Text style={[styles.subTitle]}>space-around</Text>
                <View style={[styles.countainer, {justifyContent:'space-around'}]}>
                    <View style={[styles.box, { backgroundColor: "powderblue" }]} />
                    <View style={[styles.box, { backgroundColor: "skyblue" }]} />
                    <View style={[styles.box, { backgroundColor: "steelblue" }]} />
                </View>

                <Text style={[styles.subTitle]}>space-evenly</Text>
                <View style={[styles.countainer, {justifyContent:'space-evenly'}]}>
                    <View style={[styles.box, { backgroundColor: "powderblue" }]} />
                    <View style={[styles.box, { backgroundColor: "skyblue" }]} />
                    <View style={[styles.box, { backgroundColor: "steelblue" }]} />
                </View>                
            </ScrollView>
            <View style={{ height:75, backgroundColor: 'steelblue' }} />
        </View>
    );
}

export default AppJustifyContent;

const styles = StyleSheet.create({
    box: {
        width: 50,
        height: 50,
    },
    countainer: {
        margin:10,
        flexDirection:'row'
    },
    subTitle: {
        marginLeft: 10,
        marginTop:10,
        fontSize: 20,
        fontWeight:'bold'
    }
})