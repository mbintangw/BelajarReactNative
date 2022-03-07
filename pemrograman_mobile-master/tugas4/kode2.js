import React from 'react';
import { Component } from 'react';
import { Text, View } from 'react-native';
function FunctionWithReturn() {
    return "Function With Return";
}
var string1 = "";
function FunctionWithOutReturn(value) {
    string1 = value;
}
export function AppJsExample() {
    var string2 = FunctionWithReturn();
    FunctionWithOutReturn("Function With Out Return");
    return (
        <View>
            <Text>Hello JavaScript ES6</Text>
            <Text>{string1}</Text>
            <Text>{string2}</Text>
        </View>
    )
}

