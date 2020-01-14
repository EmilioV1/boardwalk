import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, TextInput, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Logo from '../components/Logo';
import API from '../utils/API';

export default class LoginScreen extends Component {
    state = {
        email: "",
        password: "",
        error: ""
    };

    signup() {
        Actions.signup();
    };

    handleSubmit = event => {
        event.preventDefault();

        const { email, password } = this.state; //grab the current state for email and password
        console.log(email); // console.log to see if catch the input email and password
        console.log(password);
        API.login({email:email,password:password}) // grab the object's email and password
            .then(result => {
                this.setState({ error: "" });
                console.log(result.data);
                this.props.handleAuth(result.data);// match to app.jsx handleAuth
            })
            .catch(err => {
                console.log(err);
                this.setState({error: err});
            });
    };

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
                            keyboardAppearance='dark'
                        />
                        <TextInput style={styles.inputBox}
                            placeholder="Password"
                            placeholderTextColor="#fff"
                            secureTextEntry={true}
                            onChangeText={(password) => { this.setState({ password }) }}
                            value={this.state.password}
                            keyboardAppearance='dark'
                        />
                        <View style={styles.buttonsContainer}>
                            <View style={styles.button}>
                                <Button
                                    color="#ffffff"
                                    title="Log In"
                                    onPress={this.handleSubmit}
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
        fontWeight: '500'
    }
});