import React from 'react';
import {Text, View, Image} from 'react-native';
const AppHeader = () => {
  return (
    <View style={{height: 60, backgroundColor: 'lightblue'}}>
      <Text style={{fontWeight: 'bold', fontSize: 25,textAlign:'center'}}>Mohammad Bintang Wicaksono</Text>
    </View>
  );
};
const AppContent = () => {
  return (
    <View>
      <Text style={{fontWeight: 'bold', fontSize: 23, textAlign:"center"}}>1103194155</Text>
      <Image
        source={require('./images/flutterlogo.png')}
        style={{width: 400, height: 500, resizeMode: 'contain'}}
      />
    </View>
  );
};
const HelloWorldApp = () => {
  return (
    <View>
      <AppHeader />
      <AppContent />
    </View>
  );
};
export default HelloWorldApp;
