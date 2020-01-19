import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { StyleSheet, View, TextInput, Button, Text, KeyboardAvoidingView, ImageBackground } from 'react-native';
import styles from '../constants/Styles';
import background from '../assets/images/background.jpg';

export default class OldDebt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      debtAmount: "",
      monthlyPaymentAmount: "",
      interestRate: ""
    };
  };

  render() {
    return (
      <ImageBackground source={background} style={styles.backgroundImage}>
        <KeyboardAvoidingView style={styles.container} behavior="padding">
          <View>
            <View style={newStyle.textContainer}>
              <Text style={newStyle.text}>Total</Text>
            </View>
            <View style={{ height: 80 }}></View>
            <TextInput style={styles.inputBox}
              placeholder="Debt Amount"
              placeholderTextColor="#fff"
              selectionColor="#fff"
              keyboardType="email-address"
              keyboardAppearance='dark'
            />
            <TextInput style={styles.inputBox}
              placeholder="Monthly Payment Amount"
              placeholderTextColor="#fff"
              selectionColor="#fff"
              keyboardType="email-address"
              keyboardAppearance='dark'
            />
            <TextInput style={styles.inputBox}
              placeholder="Interest Rate"
              placeholderTextColor="#fff"
              selectionColor="#fff"
              keyboardType="email-address"
              keyboardAppearance='dark'
            />
          </View>
          <View style={styles.buttonsContainer}>
            <View style={profileStyle.button}>
              <Button
                color="#ffffff"
                title="Submit"
              />
            </View>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
};

const profileStyle = StyleSheet.create({
  buttonsContainer: {
    justifyContent: 'center',
    flexDirection: 'column'
  },
  button: {
    backgroundColor: '#463547',
    margin: 10,
    width: 300,
    padding: 5,
    borderRadius: 30,
    marginVertical: 10,
  },
  logOutButton: {
    backgroundColor: '#463547',
    margin: 5,
    width: 100,
    padding: 5,
  }
});

const newStyle = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 60,
    opacity: 1,
    margin: 15
  },

  textContainer: {
    alignItems: 'center',
    backgroundColor: 'rgba(70, 53, 71, 0.65)',
    borderRadius: 30,
  }
});