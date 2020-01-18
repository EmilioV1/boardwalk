import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

import { Actions } from 'react-native-router-flux';

export default class LoginScreen extends Component {

    signup() {
        Actions.signup();
    };

    render() {

        return (
            <View style={styles.container}>
                <TextInput style={styles.inputBox}
                    underlineColorAndroid={'rgba(0, 0, 0, 0)'}
                    placeholder="Email"
                    placeholderTextColor="#fff"
                    selectionColor="#fff"
                    keyboardType="email-address"
                    onSubmitEditing={() => this.password.focus()}
                />
                <TextInput style={styles.inputBox}
                    underlineColorAndroid={'rgba(0, 0, 0, 0)'}
                    placeholder="Password"
                    placeholderTextColor="#fff"
                    secureTextEntry={true}
                    ref={(input) => this.password = input}
                />
                <View style={styles.buttonsContainer}>
                    <View style={styles.button}>
                        <Button
                            color="#ffffff"
                            title="Log In" />
                    </View>

                    <View style={styles.button}>
                        <Button
                            color="pink"
                            title="Sign Up"
                            onPress={this.signup} 
                            />
                    </View>
                </View>

            </View>
        );

    };
};

const styles = StyleSheet.create({

    container: {
        flexGrow: 1,
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
    }

});