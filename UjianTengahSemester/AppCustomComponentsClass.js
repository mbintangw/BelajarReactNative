import React from 'react';
import {Component} from 'react';
import {Text, View, Image} from 'react-native';
class AppHeader extends Component {
  render() {
    return (
      <View style={{height: 60, backgroundColor: 'powderblue'}}>
        <Text style={{fontWeight: 'bold', fontSize: 25}}>Mohammad Bintang Wicaksono</Text>
      </View>
    );
  }
}
class AppContent extends Component {
  render() {
    return (
      <View>
        <Text style={{fontWeight: 'bold', fontSize: 23}}>
          1103194155
        </Text>
        <Image
          source={require('./images/flutterlogo.png')}
          style={{width: 300, height: 500, resizeMode: 'contain'}}
        />
      </View>
    );
  }
}
export {AppHeader, AppContent};
