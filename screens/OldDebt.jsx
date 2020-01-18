import React from 'react';
import { Actions } from 'react-native-router-flux';
import { StyleSheet, View, TextInput, Button, Text, KeyboardAvoidingView, ImageBackground } from 'react-native';
import styles from '../constants/Styles';

export default function OldDebt() {

  return (
    <ImageBackground source={require('../assets/images/background.jpg')} style={styles.backgroundImage}>
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View>
        <Text style={styles.oldDebt}>
        Old Debt
        </Text>
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