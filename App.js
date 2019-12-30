import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState, Component } from 'react';
import { Platform, StatusBar, StyleSheet, View, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import AppNavigator from './navigation/AppNavigator';

import Login from './screens/LoginScreen';

export default class App extends Component<{}> {
  render() {
    return (
      <view style={styles.container}>
        <StatusBar backgroundColor="#1c313a" barStyle="light-content" />   
        <Login/>     
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
