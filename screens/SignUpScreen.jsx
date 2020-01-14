import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button, ScrollView, KeyboardAvoidingView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from '../constants/Styles'
import Logo from '../components/Logo';

export default class SignUpScreen extends Component {

    render() {
        return (
            <KeyboardAvoidingView
                style={styles.container}
                behavior="padding">
                <Logo height={150} width={150} radius={25} />
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
                <View style = {{height: 40}} />
            </KeyboardAvoidingView>
        );
    };
};