import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../filenavigator/home'
import { AboutScreen } from '../filenavigator/About'
import { ListScreen } from './Listscreen'
import { DetailScreen } from './DetailScreen'
import {View, Image, TextInput} from 'react-native'
const Stack = createNativeStackNavigator();
const AppHome = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="MovieList" screenOptions={{ headerShown: true }} screenOptions={{
                headerShown: true,
                headerStyle: { backgroundColor: '#ec3237' },
                headerTintColor: '#fff',
                headerTitleStyle: { fontWeight: 'bold' },
                headerTitle: (props) => <AppHeader {...props} />
            }}>
                <Stack.Screen name="Home" component={HomeScreen} options={{title: 'My Home'}} />
                <Stack.Screen name="About" component={AboutScreen} options={{title: 'OurProfile' }}/>
                <Stack.Screen name="MovieList" component={ ListScreen } options={{ title:'Movie List' }}/>
                <Stack.Screen name="DetailScreen" component={DetailScreen} options={{ title: 'Movie Detail', headerTitle: (props) => <AppHeaderWoLogo {...props} /> }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default AppHome;

const AppHeader = () => {
    return (
        <View style={{
            flex: 1,
            width: 'auto',
            flexDirection: 'row',
            marginLeft: -15,
            paddingLeft: 0
        }}>
            <Image style={{
                width: 50,
                height: 50
            }}
                source={require('../image/telkom.png')} />
            <TextInput placeholder='ketik kata kunci di sini'
                style={{
                    width: '66%',
                    height: 40,
                    backgroundColor: 'white',
                    marginTop: 5,
                    marginLeft: 10,
                    marginRight: 10
                }} />
            <Image style={{ width: 50, height: 50 }}
                source={require('../image/loupe.png')} />
        </View>
    );
}
const AppHeaderWoLogo = () => {
    return (
        <View style={{
            flex: 1,
            width: 'auto',
            flexDirection: 'row',
            marginLeft: -15,
            paddingLeft: 0
        }}>
            <TextInput placeholder='ketik kata kunci di sini'
                style={{
                    width: '66%',
                    height: 40,
                    backgroundColor: 'white',
                    marginTop: 5,
                    marginLeft: 10,
                    marginRight: 10
                }} />
            <Image style={{ width: 50, height: 50 }}
                source={require('../image/loupe.png')} />
        </View>
    );
}
