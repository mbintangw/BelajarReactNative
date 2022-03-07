import * as React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { Card, Title, Paragraph, DataTable} from "react-native-paper";

export const NotifScreen = () => {

    return (
        <ScrollView style={{ backgroundColor:"black"}}>
        <View >
        <View style={{flexDirection:"row", backgroundColor:"black", borderWidth:2, borderBottomColor:"grey", paddingTop:10}}>
               
               <Image source={require('./images/profile2.png')} style={{width:50, height:50, left: 5, right: 5}} />
               <Card style={{width:280,left:10,bottom:5, backgroundColor:"black"}}>
                   
                   <Card.Content>
                       <Paragraph style={{color:"white", fontWeight: 'bold', fontSize: 15}}>day@yuhuuhola                 21/11/20</Paragraph>
                       <Paragraph style={{color:"white"}}>Hallo apa kabar</Paragraph>
                   </Card.Content>
               </Card>            
       </View>
       </View>
       </ScrollView>
    );
}
