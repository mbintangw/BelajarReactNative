import * as React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { Card, Title, Paragraph, DataTable} from "react-native-paper";

export const Searching = () => {
   
    return (
        <ScrollView style={{ backgroundColor:"black"}}>
            <View>           
                <Image source={require('./images/trending.png')} style={{width:415, height:250, left: 5, right: 5}} />            
                <Card style={{ borderWidth: 1 }} >
                <Text style={{fontSize:20, fontWeight:'bold',backgroundColor:'black',color:'white'}}>Trends For Your</Text>
            </Card>
            <Card style={{ borderWidth: 1 }} >
            <Text style={{ fontSize: 12,backgroundColor:'black',color:'white' }}></Text>
                <Text style={{ fontSize: 12,backgroundColor:'black',color:'white' }}>Trending In Indonesia</Text>
                <Text style={{ fontWeight:'bold',backgroundColor:'black',color:'white'}}>#pandacoin</Text>
                <Text style={{ fontSize: 10,backgroundColor:'black',color:'white' }} >12k Tweets</Text>
            </Card>
            <Card style={{ borderWidth: 1 }} >
            <Text style={{ fontSize: 12,backgroundColor:'black',color:'white' }}></Text>
                <Text style={{ fontSize: 12,backgroundColor:'black',color:'white' }}>Trending In Indonesia</Text>
                <Text style={{ fontWeight: 'bold',backgroundColor:'black',color:'white' }}>#IndoPride</Text>
                <Text style={{ fontSize: 10,backgroundColor:'black',color:'white' }} >12k Tweets</Text>
            </Card>
            <Card style={{ borderWidth: 1 }} >
            <Text style={{ fontSize: 12,backgroundColor:'black',color:'white' }}></Text>
                <Text style={{ fontSize: 12,backgroundColor:'black',color:'white' }}>Trending In Indonesia</Text>
                <Text style={{ fontWeight: 'bold',backgroundColor:'black',color:'white' }}>Banjir</Text>
                <Text style={{ fontSize: 10,backgroundColor:'black',color:'white' }} >12k Tweets</Text>
            </Card>
            <Card style={{ borderWidth: 1 }} >
            <Text style={{ fontSize: 12,backgroundColor:'black',color:'white' }}></Text>
                <Text style={{ fontSize: 12,backgroundColor:'black',color:'white' }}>Trending In Indonesia</Text>
                <Text style={{ fontWeight: 'bold',backgroundColor:'black',color:'white' }}>Besok Senin</Text>
                <Text style={{ fontSize: 10,backgroundColor:'black',color:'white' }} >12k Tweets</Text>
            </Card>
            <Card style={{ borderWidth: 1 }} >
            <Text style={{ fontSize: 12,backgroundColor:'black',color:'white' }}></Text>
                <Text style={{ fontSize: 12,backgroundColor:'black',color:'white' }}>Trending In Indonesia</Text>
                <Text style={{ fontWeight: 'bold',backgroundColor:'black',color:'white' }}>Ujan</Text>
                <Text style={{ fontSize: 10,backgroundColor:'black',color:'white' }} >12k Tweets</Text>
            </Card>
            <Card style={{ borderWidth: 1 }} >
            <Text style={{ fontSize: 12,backgroundColor:'black',color:'white' }}></Text>
                <Text style={{ fontSize: 12,backgroundColor:'black',color:'white' }}>Trending In Indonesia</Text>
                <Text style={{ fontWeight: 'bold',backgroundColor:'black',color:'white' }}>#IkatanCintaEp502</Text>
                <Text style={{ fontSize: 10,backgroundColor:'black',color:'white' }} >12k Tweets</Text>
            </Card>
            <Card style={{ borderWidth: 1 }} >
            <Text style={{ fontSize: 12,backgroundColor:'black',color:'white' }}></Text>
                <Text style={{ fontSize: 12,backgroundColor:'black',color:'white' }}>Trending In Indonesia</Text>
                <Text style={{ fontWeight: 'bold',backgroundColor:'black',color:'white' }}>#Halloween</Text>
                <Text style={{ fontSize: 10,backgroundColor:'black',color:'white' }} >12k Tweets</Text>
            </Card>
            <Card style={{ borderWidth: 1 }} >
            <Text style={{ fontSize: 12,backgroundColor:'black',color:'white' }}></Text>
                <Text style={{ fontSize: 12,backgroundColor:'black',color:'white' }}>Trending In Indonesia</Text>
                <Text style={{ fontWeight: 'bold',backgroundColor:'black',color:'white' }}>Covid-19</Text>
                <Text style={{ fontSize: 10,backgroundColor:'black',color:'white' }} >12k Tweets</Text>
            </Card>
            </View>
        </ScrollView>
    );
}
