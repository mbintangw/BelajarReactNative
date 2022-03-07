import * as React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { Tab } from 'react-native-elements/dist/Tab';
import { Card, Title, Paragraph, DataTable} from "react-native-paper";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabView } from 'react-native-elements/dist/TabView';
import { ScreenContainer } from 'react-native-screens';

export const BerandaScreen = ({ Navigation }) => {

    return (
        <ScrollView style={{ backgroundColor:"black"}}>
       
            <View style={{flexDirection:"row", backgroundColor:"white", borderWidth:1, borderBottomColor:"grey", paddingTop:10}}>
               
                    <Image source={require('./images/profile.png')} style={{width:60, height:60}} />
                    <Card style={{width:280, backgroundColor:"white"}}>
                        <Card.Title title="elon @elonmusik"/>
                        <Card.Content>
                            <Paragraph>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam error, reiciendis pariatur voluptatem molestiae ullam laboriosam odit voluptatum voluptatibus, vero natus possimus ex, corporis libero? Ab dolor cumque quos vitae.</Paragraph>
                            <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                                <View><Image source={require('./images/speech-bubble.png')} style={{width:20,height:20}}/></View>
                            <View style={{ width: 20, height: 20, }}><Image source={require('./images/retweet.png')} style={{ width: 20, height: 20 }} /></View>
                            <View style={{ width: 20, height: 20 }}><Image source={require('./images/like.png')} style={{ width: 20, height: 20 }} /></View>
                            <View style={{ width: 20, height: 20 }}><Image source={require('./images/share.png')} style={{ width: 20, height: 20 }} /></View>
                                </View>
                        </Card.Content>
                    </Card>            
            </View>

            <View style={{ flexDirection: "row", backgroundColor: "white", borderWidth: 2, borderBottomColor: "grey", paddingTop: 10 }}>

                <Image source={require('./images/man.png')} style={{ width: 60, height: 60 }} />
                <Card style={{ width: 280, backgroundColor: "white" }}>
                    <Card.Title title="jeff @jeffbansos" />
                    <Card.Content>
                        <Paragraph>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam error, reiciendis pariatur voluptatem molestiae ullam laboriosam odit voluptatum voluptatibus, vero natus possimus ex, corporis libero? Ab dolor cumque quos vitae.</Paragraph>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <View><Image source={require('./images/speech-bubble.png')} style={{ width: 20, height: 20 }} /></View>
                            <View style={{ width: 20, height: 20, }}><Image source={require('./images/retweet.png')} style={{ width: 20, height: 20 }} /></View>
                            <View style={{ width: 20, height: 20 }}><Image source={require('./images/like.png')} style={{ width: 20, height: 20 }} /></View>
                            <View style={{ width: 20, height: 20 }}><Image source={require('./images/share.png')} style={{ width: 20, height: 20 }} /></View>
                        </View>
                    </Card.Content>
                </Card>
            </View>
            <View style={{ flexDirection: "row", backgroundColor: "white", borderWidth: 2, borderBottomColor: "grey", paddingTop: 10 }}>

                <Image source={require('./images/avatar.png')} style={{ width: 60, height: 60 }} />
                <Card style={{ width: 280, backgroundColor: "white" }}>
                    <Card.Title title="mark @zukenburkgokill" />
                    <Card.Content>
                        <Paragraph>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam error, reiciendis pariatur voluptatem molestiae ullam laboriosam odit voluptatum voluptatibus, vero natus possimus ex, corporis libero? Ab dolor cumque quos vitae.</Paragraph>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <View><Image source={require('./images/speech-bubble.png')} style={{ width: 20, height: 20 }} /></View>
                            <View style={{ width: 20, height: 20, }}><Image source={require('./images/retweet.png')} style={{ width: 20, height: 20 }} /></View>
                            <View style={{ width: 20, height: 20 }}><Image source={require('./images/like.png')} style={{ width: 20, height: 20 }} /></View>
                            <View style={{ width: 20, height: 20 }}><Image source={require('./images/share.png')} style={{ width: 20, height: 20 }} /></View>
                        </View>
                    </Card.Content>
                </Card>
            </View>
            <View style={{ flexDirection: "row", backgroundColor: "white", borderWidth: 2, borderBottomColor: "grey", paddingTop: 10 }}>

                <Image source={require('./images/1man.png')} style={{ width: 60, height: 60 }} />
                <Card style={{ width: 280, backgroundColor: "white" }}>
                    <Card.Title title="gate @billbong" />
                    <Card.Content>
                        <Paragraph>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam error, reiciendis pariatur voluptatem molestiae ullam laboriosam odit voluptatum voluptatibus, vero natus possimus ex, corporis libero? Ab dolor cumque quos vitae.</Paragraph>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <View><Image source={require('./images/speech-bubble.png')} style={{ width: 20, height: 20 }} /></View>
                            <View style={{ width: 20, height: 20, }}><Image source={require('./images/retweet.png')} style={{ width: 20, height: 20 }} /></View>
                            <View style={{ width: 20, height: 20 }}><Image source={require('./images/like.png')} style={{ width: 20, height: 20 }} /></View>
                            <View style={{ width: 20, height: 20 }}><Image source={require('./images/share.png')} style={{ width: 20, height: 20 }} /></View>
                        </View>
                    </Card.Content>
                </Card>
            </View>
            
           
        </ScrollView>
        
    );
}

