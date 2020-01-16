import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button, ScrollView, KeyboardAvoidingView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from '../constants/Styles'
import Logo from '../components/Logo';

export default class SignUpScreen extends Component {

    handleSubmit = event => {
        event.preventDefault();

        
    }
    render() {
        return (
            <KeyboardAvoidingView
                style={styles.container}
                behavior="padding">
                <Logo height={140} width={140} radius={25} />
                <View>
                    <TextInput style={styles.inputBox}
                        placeholder="First"
                        placeholderTextColor="#fff"
                        selectionColor="#fff"
                        keyboardType="email-address"
                        keyboardAppearance='dark'
                    />
                    <TextInput style={styles.inputBox}
                        placeholder="Last"
                        placeholderTextColor="#fff"
                        selectionColor="#fff"
                        keyboardType="email-address"
                        keyboardAppearance='dark'
                    />
                    <TextInput style={styles.inputBox}
                        placeholder="Email"
                        placeholderTextColor="#fff"
                        selectionColor="#fff"
                        keyboardType="email-address"
                        keyboardAppearance='dark'
                    />
                    <TextInput style={styles.inputBox}
                        placeholder="Password"
                        placeholderTextColor="#fff"
                        secureTextEntry={true}
                        keyboardAppearance='dark'
                    />
                    <View style={styles.buttonsContainer}>
                        <View style={styles.button}>
                            <Button
                                color="#ffffff"
                                title="Submit"
                            />
                        </View>
                    </View>
                </View>
                <View style = {{height: 60}} />
            </KeyboardAvoidingView>
        );
    };
};