import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState, Component } from 'react';
import { Platform, StatusBar, StyleSheet, View, Image, button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import AppNavigator from './navigation/AppNavigator';
import Logo from '../components/Logo';
import Form from '../components/Form';

import {Actions} from 'react-native-router-flux';

export default class SignUpScreen extends Component<{}> {
    goBack(){
        Actions.pop();
    }

    render() {
        return(
            <View style={styles.container}>
                <Logo/>
                <Form type="Signup"/>
                <view style={styles.signupContainer}>
                    <Text style={styles.signupText}>
                        Already have an account? 
                    </Text>
                    <button onClick={this.goBack}>
                        <Text style={styles.signupButton}>
                            Log in!
                        </Text>
                    </button>    
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
      alignItems: 'flex-end',
      justifyContent: 'center',
      paddingVertical: 16,
      flexDirection: 'row',
    },
    signupText: {
        color: 'rgba(255, 255, 255, 0.6)',
        fontSize: 16,
    }
    signupButton: {
        color: '#fff',
        fontSize: 16,
        fontWeight:'500',
    }
  });