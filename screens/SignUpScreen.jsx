import React, { Component } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

import { Actions } from 'react-native-router-flux';

export default class SignUpScreen extends Component {

    render() {
        return (
            <View
                style={styles.container}>
                <View
                    style={styles.container}>
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

                    {/* this needs to be changed to the upload file button */}
                    <TextInput style={styles.inputBox}
                        placeholder="Image"
                        placeholderTextColor="#fff"
                        secureTextEntry={true}
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
                </View>
            </View>
        );
    };
};

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#17233f',
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
        fontWeight: '500',
    },

    inputBox: {
        width: 300,
        padding: 5,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderRadius: 2,
        paddingHorizontal: 16,
        fontSize: 30,
        color: '#fff',
        marginVertical: 10,
    }
});