import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState, Component } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import AppNavigator from './navigation/AppNavigator';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload, \n' +
      'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload, \n' +
      'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  render() {
    return (
      <view style={styles.container}>
        <Text>Lets talk about dalla dalla bills y'all!</Text>
      </view>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#455a64',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
