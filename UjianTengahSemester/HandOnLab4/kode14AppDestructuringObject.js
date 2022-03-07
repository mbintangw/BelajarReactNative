import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
const AppDestructuringObject = () => {
    const person = {
        firstName: "Iwan",
        lastName: "Irawan",
        age: 21,
        gender: "man"
    };
    const { firstName, lastName, age, gender } = person;
    return (
        <View>
            <Text>Detail Siswa</Text>
            <Text>Nama Lengkap: {firstName + " " + lastName}</Text>
            <Text>Umur: {age}</Text>
            <Text>Jenis Kelamin: {gender}</Text>
        </View>
    )
}
export default AppDestructuringObject;
