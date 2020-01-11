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
                        underlineColorAndroid={'rgba(0, 0, 0, 0)'}
                        placeholder="First"
                        placeholderTextColor="#fff"
                        selectionColor="#fff"
                        keyboardType="email-address"
                    />
                    <TextInput style={styles.inputBox}
                        underlineColorAndroid={'rgba(0, 0, 0, 0)'}
                        placeholder="Last"
                        placeholderTextColor="#fff"
                        selectionColor="#fff"
                        keyboardType="email-address"
                    />

                    {/* this needs to be changed to the upload file button */}
                    <TextInput style={styles.inputBox}
                        underlineColorAndroid={'rgba(0, 0, 0, 0)'}
                        placeholder="Image"
                        placeholderTextColor="#fff"
                        secureTextEntry={true}
                    />
                    <TextInput style={styles.inputBox}
                        underlineColorAndroid={'rgba(0, 0, 0, 0)'}
                        placeholder="Email"
                        placeholderTextColor="#fff"
                        selectionColor="#fff"
                        keyboardType="email-address"
                    />
                    <TextInput style={styles.inputBox}
                        underlineColorAndroid={'rgba(0, 0, 0, 0)'}
                        placeholder="Password"
                        placeholderTextColor="#fff"
                        secureTextEntry={true}
                    />
                </View>
            </View>

        );

    };

};

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
        fontWeight: '500',
    }

});