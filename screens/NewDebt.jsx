import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { StyleSheet, View, KeyboardAvoidingView, Button, TextInput, Text, ImageBackground } from 'react-native';
import styles from '../constants/Styles';
import API from '../utils/API';

export default class NewDbet extends Component {
  state = {
        loanAmount: "",
        downPayment: "",
        loanTerm: "",
        interestRate: ""
      };

      handleSubmit = event => {

        event.preventDefault();

        const { loanAmount, downPayment, loanTerm, interestRate } = this.state; //grab the current state for email and password
        console.log(loanAmount);
        console.log(downPayment);
        console.log(loanTerm);
        console.log(interestRate);
        
        //Compound Interest rate calculation with the final amount
        let tot = [loanAmount - downPayment] * [Math.pow((1+(interestRate/300)), (3 * loanTerm))];
        let Total = Math.round(tot).toFixed();
        console.log(Total);
        
        API.saveDebt({ loanAmount: loanAmount, downPayment: downPayment, loanTerm: loanTerm, interestRate: interestRate, Total: Total })
            .then(result => {
              result = Total;
              //console.log(result);
                this.setState({
                    loanAmount: '',
                    downPayment: '',
                    loanTerm: '',
                    interestRate: '',
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
      <ImageBackground source={require('../assets/images/background.jpg')} style={styles.backgroundImage}>
        <KeyboardAvoidingView style={styles.container} behavior="padding">
          <View>
            <View style={newStyle.textContainer}>
              <Text style={newStyle.text}>Total</Text>
              
            </View>
            <View style={{ height: 80 }}></View>
            <TextInput style={styles.inputBox}
              placeholder="Loan Amount"
              placeholderTextColor="#fff"
              selectionColor="#fff"
              keyboardType="email-address"
              onChangeText={(loanAmount) => { this.setState({ loanAmount }) }}
              value={this.state.loanAmount}
              keyboardAppearance='dark'
            />
            <TextInput style={styles.inputBox}
              placeholder=" Down Payment"
              placeholderTextColor="#fff"
              secureTextEntry={true}
              onChangeText={(downPayment) => { this.setState({ downPayment }) }}
              value={this.state.downPayment}
              keyboardAppearance='dark'
            />
            <TextInput style={styles.inputBox}
              placeholder="Loan Term In Years"
              placeholderTextColor="#fff"
              selectionColor="#fff"
              keyboardType="email-address"
              onChangeText={(loanTerm) => { this.setState({ loanTerm }) }}
              value={this.state.loanTerm}
              keyboardAppearance='dark'
            />
            <TextInput style={styles.inputBox}
              placeholder="Interest Rate"
              placeholderTextColor="#fff"
              secureTextEntry={true}
              onChangeText={(interestRate) => { this.setState({ interestRate }) }}
              value={this.state.interestRate}
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
            <View style={{ height: 40 }}></View>
          </View>
        </ KeyboardAvoidingView>
      </ImageBackground>
    );
  };
};

const newStyle = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 50,
    opacity: 1,
    margin: 15
  },

  textContainer: {
    alignItems: 'center',
    backgroundColor: 'rgba(70, 53, 71, 0.65)',
    borderRadius: 30,
  }
});