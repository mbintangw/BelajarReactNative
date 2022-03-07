import React from 'react';
import { Text, View, Image } from 'react-native';
export const AppHeader = () => {
return (
    <View style={{height:60, backgroundColor: 'gray'}}>
<Text style={{fontWeight: 'bold',fontSize: 32}}>AppTitle</Text>
</View>
);
}
export const AppContent = () => {
return (
<View>
<Text style={{fontWeight: 'bold',fontSize: 23}}>AppContent</Text>
<Image source={require('./images/flutterlogo.png')}
style={{width: 300, height:50, resizeMode:'contain'}} />
</View>
);
}
export const AppFooter = (props) => {
return (
<View style={{height:40, backgroundColor: 'gray'}}>
<Text style={{fontWeight: 'bold',fontSize: 23,color:'white'}}>{props.footerContent}</Text>
</View>
);
}