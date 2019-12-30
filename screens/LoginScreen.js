import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState, Component } from 'react';
import { Platform, StatusBar, StyleSheet, View, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import AppNavigator from './navigation/AppNavigator';
import Logo from '../components/Logo';
import Form from '../components/Form';

export default class LoginScreen extends Component<{}> {
    render() {
        return(
            <View style={styles.container}>
                <Logo/>
                <Form/>
                <view style={styles.signupContainer}>
                    <Text>
                        Don't have an account yet? Sign up!
                    </Text>
                </view>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#455a64',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    signupContainer: {
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }
  });