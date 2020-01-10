import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {Actions} from 'react-native-router-flux';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

logout(){
  Actions.pop();
};

export default function HomeScreen() {

  return (
    <View style ={styles.container}>
      <Text>Hello I am in home screen</Text>
    </View>
  );

};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },

});
