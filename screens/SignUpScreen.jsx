import React, { Component } from 'react';
import { View, TextInput, Button, KeyboardAvoidingView, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from '../constants/Styles'
import LogoHome from '../components/LogoHome';
import API from '../utils/API';

export default class SignUpScreen extends Component {
    state = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        error: ""
    };

    handleSubmit = event => {
        event.preventDefault();

        const { firstName, lastName, email, password } = this.state; //grab the current state for email and password
        console.log(firstName);
        console.log(lastName);
        console.log(email);
        console.log(password);
        API.signup({ firstName: firstName, lastName: lastName, email: email, password: password })
            .then(result => {
                console.log(result);
                this.setState({ 
                    firstName: '', 
                    lastName: '', 
                    email: '', 
                    password: '', 
                    error: '' 
                });
                this.props.handleAuth(result.data);
            })
            .catch(err => {
                console.log(err);
                this.setState({ error: err });
            });
    };

    render() {
        return (
            <ImageBackground source={require('../assets/images/background.png')} style={styles.backgroundImage}>
            <KeyboardAvoidingView
                style={styles.container}
                behavior="padding">
                <LogoHome height={140} width={140} radius={25} />
                <View>
                    <TextInput style={styles.inputBox}
                        placeholder="First"
                        placeholderTextColor="#fff"
                        selectionColor="#fff"
                        keyboardType="email-address"
                        onChangeText={(firstName) => { this.setState({ firstName }) }}
                        value={this.state.firstName}
                        keyboardAppearance='dark'
                    />
                    <TextInput style={styles.inputBox}
                        placeholder="Last"
                        placeholderTextColor="#fff"
                        selectionColor="#fff"
                        keyboardType="email-address"
                        onChangeText={(lastName) => { this.setState({ lastName }) }}
                        value={this.state.lastName}
                        keyboardAppearance='dark'
                    />
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
                                title="Submit"
                                onPress={this.handleSubmit}
                            />
                        </View>
                    </View>
                </View>
                <View style={{ height: 60 }} />
            </KeyboardAvoidingView>
            </ImageBackground>
        );
    };
};