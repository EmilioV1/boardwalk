import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, TextInput, Button } from 'react-native';

import Logo from '../components/Logo';
import { Actions } from 'react-native-router-flux';

const credentials = { email: "Emilio@gmail.com", password: "1234" }

export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    };

    signup() {
        Actions.signup();
    };

    checkCred = () => {
        if (this.state.email === credentials.email && this.state.password === credentials.password) {
            this.props.handleAuth();
        } else {
            alert("Email or password is wrong!");
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView >
                    <Logo />
                    <View style={styles.container}>
                        <TextInput style={styles.inputBox}
                            placeholder="Email"
                            placeholderTextColor="#fff"
                            selectionColor="#fff"
                            keyboardType="email-address"
                            onChangeText={(email) => { this.setState({ email }) }}
                            value={this.state.email}
                        />
                        <TextInput style={styles.inputBox}
                            placeholder="Password"
                            placeholderTextColor="#fff"
                            secureTextEntry={true}
                            onChangeText={(password) => { this.setState({ password }) }}
                            value={this.state.password}
                        />
                        <View style={styles.buttonsContainer}>
                            <View style={styles.button}>
                                <Button
                                    color="#ffffff"
                                    title="Log In"
                                    onPress={this.checkCred}
                                />
                            </View>
                            <View style={styles.button}>
                                <Button
                                    color="#ffffff"
                                    title="Sign Up"
                                    onPress={this.signup} />
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
};

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#17233f',
        flex: 1,
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
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