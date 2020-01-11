import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Logo from '../components/Logo';

export default class SignUpScreen extends Component {

    render() {
        return (
            <View
                style={styles.container}>
                <ScrollView>
                    <Logo />
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
                </ScrollView>
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

    signupText: {
        color: 'rgba(255, 255, 255, 0.6)',
        fontSize: 16,
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
    },

    buttonsContainer: {
        justifyContent: 'center',
        flexDirection: 'row'
    },

    button: {
        backgroundColor: 'black',
        margin: 10,
        fontWeight: '500'
    }
});