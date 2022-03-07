import * as React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { Tab } from 'react-native-elements/dist/Tab';
import { Card, Title, Paragraph, DataTable} from "react-native-paper";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabView } from 'react-native-elements/dist/TabView';
import { ScreenContainer } from 'react-native-screens';

export const BerandaScreen = ({ navigation }) => {

    return (
        <ScrollView style={{ backgroundColor:"black"}}>
       
            <View style={{flexDirection:"row", backgroundColor:"black", borderWidth:2, borderBottomColor:"grey", paddingTop:10}}>
               
                    <Image source={require('./images/profile.png')} style={{width:50, height:50, left: 5, right: 5}} />
                    <Card style={{width:280,left:10,bottom:5, backgroundColor:"black"}}>
                        
                        <Card.Content>
                            <Paragraph style={{color:"white", fontWeight: 'bold', fontSize: 20}}>Mohammad Bintang Wicaksono @bntg21</Paragraph>
                            <Paragraph style={{color:"white",fontSize:15}}>Besok Senin ya gess, jangan lupa bersyukur, semangat menjalani harinya!</Paragraph>
                            <Paragraph style={{color:"white",fontSize:15}}>   </Paragraph>
                            <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                                <View><Image source={require('./images/speech-bubble.png')} style={{width:20,height:20,tintColor:'white'}}/></View>
                            <View style={{ width: 20, height: 20 }}><Image source={require('./images/retweet.png')} style={{ width: 20, height: 20,  tintColor:'white'}} /></View>
                            <View style={{ width: 20, height: 20 }}><Image source={require('./images/love.png')} style={{ width: 20, height: 20,tintColor:'white' }} /></View>
                            <View style={{ width: 20, height: 20 }}><Image source={require('./images/share.png')} style={{ width: 20, height: 20,tintColor:'white' }} /></View>
                                </View>
                        </Card.Content>
                    </Card>            
            </View>

            <View style={{ flexDirection: "row", backgroundColor: "black", borderWidth: 2, borderBottomColor: "grey", paddingTop: 10 }}>

                <Image source={require('./images/profile2.png')} style={{ width: 50, height: 50, left: 5, right: 5 }} />
                <Card style={{ width: 280,left:10,bottom:5, backgroundColor: "black" }}>
                    
                    <Card.Content>
                        <Paragraph style={{color:"white", fontWeight: 'bold', fontSize: 20}}>day @yuhhuuhola</Paragraph>
                        <Paragraph style={{color:"white",fontSize:15}}>Pemandangan yang sangat indah</Paragraph>
                        <Image source={require('./images/pemandangan.jpg')} style={{width:300, height:100, left: 5, right: 5}} />
                        <Paragraph style={{color:"white",fontSize:15}}>   </Paragraph>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <View><Image source={require('./images/speech-bubble.png')} style={{ width: 20, height: 20,tintColor:'white' }} /></View>
                            <View style={{ width: 20, height: 20, }}><Image source={require('./images/retweet.png')} style={{ width: 20, height: 20,tintColor:'white' }} /></View>
                            <View style={{ width: 20, height: 20 }}><Image source={require('./images/love.png')} style={{ width: 20, height: 20,tintColor:'white' }} /></View>
                            <View style={{ width: 20, height: 20 }}><Image source={require('./images/share.png')} style={{ width: 20, height: 20,tintColor:'white' }} /></View>
                        </View>
                    </Card.Content>
                </Card>
            </View>
            <View style={{ flexDirection: "row", backgroundColor: "black", borderWidth: 2, borderBottomColor: "grey", paddingTop: 10 }}>

                <Image source={require('./images/profile3.png')} style={{ width: 50, height: 50, left: 5, right: 5 }} />
                <Card style={{ width: 280,left:10,bottom:5, backgroundColor: "black" }}>
                    
                    <Card.Content>
                        <Paragraph style={{color:"white", fontWeight: 'bold', fontSize: 20}}>jangkuy @ucancallme</Paragraph>
                        <Paragraph style={{color:"white",fontSize:15}}>Pusing sekali hari ini yaaa</Paragraph>
                        <Paragraph style={{color:"white",fontSize:15}}>   </Paragraph>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <View><Image source={require('./images/speech-bubble.png')} style={{ width: 20, height: 20,tintColor:'white' }} /></View>
                            <View style={{ width: 20, height: 20, }}><Image source={require('./images/retweet.png')} style={{ width: 20, height: 20,tintColor:'white' }} /></View>
                            <View style={{ width: 20, height: 20 }}><Image source={require('./images/love.png')} style={{ width: 20, height: 20,tintColor:'white' }} /></View>
                            <View style={{ width: 20, height: 20 }}><Image source={require('./images/share.png')} style={{ width: 20, height: 20,tintColor:'white' }} /></View>
                        </View>
                    </Card.Content>
                </Card>
            </View>
            <View style={{ flexDirection: "row", backgroundColor: "black", borderWidth: 2, borderBottomColor: "grey", paddingTop: 10 }}>

                <Image source={require('./images/profile4.png')} style={{ width: 50, height: 50, left: 5, right: 5 }} />
                <Card style={{ width: 280,left:10,bottom:5, backgroundColor: "black" }}>
                    
                    <Card.Content>
                        <Paragraph style={{color:"white", fontWeight: 'bold', fontSize: 20}}>gate @billbong</Paragraph>
                        <Paragraph style={{color:"white",fontSize:15}}>Selamat Datang para peserta ujian, semoga kalian bisa mengerjakan soalnya ya hehe</Paragraph>
                        <Paragraph style={{color:"white",fontSize:15}}>   </Paragraph>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <View><Image source={require('./images/speech-bubble.png')} style={{ width: 20, height: 20,tintColor:'white' }} /></View>
                            <View style={{ width: 20, height: 20, }}><Image source={require('./images/retweet.png')} style={{ width: 20, height: 20,tintColor:'white' }} /></View>
                            <View style={{ width: 20, height: 20 }}><Image source={require('./images/love.png')} style={{ width: 20, height: 20,tintColor:'white' }} /></View>
                            <View style={{ width: 20, height: 20 }}><Image source={require('./images/share.png')} style={{ width: 20, height: 20,tintColor:'white' }} /></View>
                        </View>
                    </Card.Content>
                </Card>
            </View>
            
           
        </ScrollView>
        
    );
}
