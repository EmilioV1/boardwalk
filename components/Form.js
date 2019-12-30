import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState, Component } from 'react';
import { Platform, StatusBar, StyleSheet, View, Image, TextInput, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import AppNavigator from './navigation/AppNavigator';
import Logo from '../components/Logo';

export default class LoginScreen extends Component<{}> {
    render() {
        return(
            <View style={styles.container}>
               <TextInput style={styles.inputBox} 
                    underlineColorAndroid={'rgba(0, 0, 0, 0)'} 
                    placeholder="Email"
                    placeholderTextColor= "#fff"
               />
               <TextInput style={styles.inputBox} 
                    underlineColorAndroid={'rgba(0, 0, 0, 0)'} 
                    placeholder="Password"
                    placeholderTextColor= "#fff" 
                    secureTextEntry={true}
               />
               <Button style={styles.buttonBox}>
                   <Text style={styles.buttonText}>
                       Login
                   </Text>
               </Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    inputBox: {
        width: 300,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16, 
        color: '#fff',
        marginVertical: 10,
    },
    buttonBox: {
        width: 300,
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 13,
        backgroundColor: '#1c313a',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#fff',
        textAlign: 'center'
    }
  });