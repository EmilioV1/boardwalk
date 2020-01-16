import React, { Component } from 'react';
import { View, TextInput, Button, KeyboardAvoidingView } from 'react-native';
import styles from '../constants/Styles'
import { Actions } from 'react-native-router-flux';
import Logo from '../components/Logo';

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
    };

    render() {
        return (
            <KeyboardAvoidingView style={styles.container} 
            behavior="padding"
            >
                <Logo height = {200} width = {200} radius = {30}/>
                <View>
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
            <View style = {{height:40}}></View>
            </ KeyboardAvoidingView>
        );
    };
};

