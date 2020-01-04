import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState, Component } from 'react';
import { Platform, StatusBar, StyleSheet, View, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import AppNavigator from './navigation/AppNavigator';

export default class Logo extends Component<{}> {
    render() {
        return(
            <view style={styles.container}>
            <Image
          style={{width: 50, height: 50}}
          source={require('../assets/images/smileyface.png')}
            />
            <Text style={styles.logoText}>Welcome to Boardwalk</Text>
            </view>
        )
    }
}

const styles = StyleSheet.create({
    container: {
         flexGrow: 1,
         justifyContent: 'flex-end',
         alignItems: 'center',
    },
    logoText: {
        marginVertical: 15,
        fontSize: 18,
        color: 'rgba(255, 255, 255, 0.7)'
    }
  });