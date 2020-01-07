import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/Form';

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
    },
    
    signupButton: {
        color: '#fff',
        fontSize: 16,
        fontWeight:'500',
    }

});

export default class LoginScreen extends Component {

    render() {
        return(
            <View 
            style={styles.container}>
                <Logo/>
                <Form type="Login"/>
            </View>
        )
    }
    
};