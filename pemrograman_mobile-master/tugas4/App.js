import React from 'react';
import {View, Text} from 'react-native';
import { Component } from 'react';
import {AppJsExample} from './kode2'
import { AppJsExample2 } from './kode3arrow';

//index utama untuk class component
import { AppRegistry } from 'react-native';
import AppClassExample from './kode4class';
import { name as appName } from '../app.json';
//customcomponentclass
import {AppHeader,AppContent} from './kode5customcomponentclass'
import AppCustomComponentFooter from './kode11customcomponentfooter'


//classcomponent
// AppRegistry.registerComponent(appName, () => AppClassExample);
// export default AppClassExample;

const tugas4 = () => {
    return(
        <View>
            <AppHeader/>
            <AppContent/>
            <AppCustomComponentFooter/>
        </View>
    );
}
export default tugas4;

//arraymethod

// import AppArrayMethod from './kode8arraymethod';

// AppRegistry.registerComponent(appName, () => AppArrayMethod);
// export default AppArrayMethod;

//array method dengan atribut id dan value

// import AppArrayMethod from './kode10arraymethodeidvalue';
// AppRegistry.registerComponent(appName, () => AppArrayMethod);
// export default AppArrayMethod;



