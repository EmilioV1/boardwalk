import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { StyleSheet, View, TextInput, Button, Text, KeyboardAvoidingView, ImageBackground } from 'react-native';
import styles from '../constants/Styles';
import background from '../assets/images/background.jpg';
import API from '../utils/API';

export default class OldDebt extends Component {
  state = {
    debtAmount: "",
    monthlyPaymentAmount: "",
    oldinterestRate: ""
  };

  handleSubmit = event => {

    event.preventDefault();

    const { debtAmount, monthlyPaymentAmount, oldinterestRate} = this.state; //grab the current state for email and password
    console.log(debtAmount);
    console.log(monthlyPaymentAmount);
    console.log(oldinterestRate);

    //Principal paid in one year calculation
    let tot = (monthlyPaymentAmount - (((oldinterestRate/100) * debtAmount)/12)) * 12;
    let Total = Math.round(tot).toFixed();
    console.log(Total);

    API.saveDebt({ debtAmount: debtAmount, monthlyPaymentAmount: monthlyPaymentAmount, oldinterestRate: oldinterestRate, Total: Total })
        .then(result => {
            result = Total;
            //console.log(result);
            this.setState({
                debtAmount: '',
                monthlyPaymentAmount: '',
                oldinterestRate: '',
                Total: '',
                error: ''
            });
            //this.props.handleAuth(result.data);
        })
        .catch(err => {
            console.log(err);
            this.setState({ error: err });
        });
    
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
              onChangeText={(debtAmount) => { this.setState({ debtAmount }) }}
              value={this.state.debtAmount}
              keyboardAppearance='dark'
            />
            <TextInput style={styles.inputBox}
              placeholder="Monthly Payment Amount"
              placeholderTextColor="#fff"
              selectionColor="#fff"
              keyboardType="email-address"
              onChangeText={(monthlyPaymentAmount) => { this.setState({ monthlyPaymentAmount }) }}
              value={this.state.monthlyPaymentAmount}
              keyboardAppearance='dark'
            />
            <TextInput style={styles.inputBox}
              placeholder="Interest Rate"
              placeholderTextColor="#fff"
              selectionColor="#fff"
              keyboardType="email-address"
              onChangeText={(oldinterestRate) => { this.setState({ oldinterestRate }) }}
              value={this.state.oldinterestRate}
              keyboardAppearance='dark'
            />
          </View>
          <View style={styles.buttonsContainer}>
            <View style={profileStyle.button}>
              <Button
                color="#ffffff"
                title="Submit"
                onPress={this.handleSubmit}
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