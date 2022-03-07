import React from 'react';
import {Text, View, Image, StyleSheet, ScrollView, Button} from 'react-native';
import {useState} from 'react';

const AppJustifyContent = () => {
  const [flex, setflex] = useState('flexstart');
  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <View style={{height: 75, backgroundColor: 'powderblue'}} />
      <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
        <Text style={[styles.subTitle]}>{flex}</Text>
        <View style={[styles.countainer, {justifyContent : (flex)}]}>
          <View style={[styles.box, {backgroundColor: 'powderblue'}]} />
          <View style={[styles.box, {backgroundColor: 'skyblue'}]} />
          <View style={[styles.box, {backgroundColor: 'steelblue'}]} />
        </View>
      </ScrollView>
      <View style={{height: 300, backgroundColor: 'steelblue'}}>
        <View
          style={[
            styles.countainer,
            {
              justifyContent: 'space-between',
              flexDirection: 'column',
              flex: 1,
              marginTop: 10,
            },
          ]}>
          <Button
            title="flexstart"
            onPress={() => setflex('flex-start')}
            style={{backgroundColor: 'powderblue'}}
          />
          <Button
            title="flexend"
            onPress={() => setflex('flex-end')}
            style={{backgroundColor: 'powderblue'}}
          />
          <Button
            title="center"
            onPress={() => setflex('center')}
            style={{backgroundColor: 'powderblue'}}
          />
          <Button
            title="spacebetween"
            onPress={() => setflex('space-between')}
            style={{backgroundColor: 'powderblue'}}
          />
          <Button
            title="spacearound"
            onPress={() => setflex('space-around')}
            style={{backgroundColor: 'powderblue'}}
          />
          <Button
            title="spaceevenly"
            onPress={() => setflex('space-evenly')}
            style={{backgroundColor: 'powderblue'}}
          />
        </View>
      </View>
    </View>
  );
};
export default AppJustifyContent;

const styles = StyleSheet.create({
  box: {
    width: 50,
    height: 50,
  },
  countainer: {
    margin: 10,
    flexDirection: 'row',
  },
  subTitle: {
    marginLeft: 10,
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
});