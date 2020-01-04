import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/Form';

import {Actions} from 'react-native-router-flux';

export default class SignUpScreen extends Component {
    goBack(){
        Actions.pop();
    }

    render() {
        return(
            <View style={styles.container}>
                <Logo/>
                <Form type="Signup"/>
                <View style={styles.signupContainer}>
                    <Text style={styles.signupText}>
                        Already have an account? 
                    </Text>
                    <Button 
                    title="Sign Up"
                    onPress={this.goBack}>
                        <Text style={styles.signupButton}>
                            Log in!
                        </Text>
                    </Button>    
                </View>
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