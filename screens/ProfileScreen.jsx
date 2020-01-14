import React from 'react';
import { Actions } from 'react-native-router-flux';
import { StyleSheet, ScrollView, View, TextInput, Button, Text, KeyboardAvoidingView } from 'react-native';
import styles from '../constants/Styles';

export default function ProfileScreen() {

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Text style={styles.profileText}>[USER'S NAME]</Text>
      <View>
        <TextInput style={styles.inputBox}
          placeholder="Annual Income"
          placeholderTextColor="#fff"
          selectionColor="#fff"
          keyboardType="email-address"
          keyboardAppearance='dark'
        />
        <TextInput style={styles.inputBox}
          placeholder="Savings"
          placeholderTextColor="#fff"
          selectionColor="#fff"
          keyboardType="email-address"
          keyboardAppearance='dark'
        />
        <TextInput style={styles.inputBox}
          placeholder="Debt"
          placeholderTextColor="#fff"
          selectionColor="#fff"
          keyboardType="email-address"
          keyboardAppearance='dark'
        />
        <TextInput style={styles.inputBox}
          placeholder="Report"
          placeholderTextColor="#fff"
          selectionColor="#fff"
          keyboardType="email-address"
          keyboardAppearance='dark'
        />
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.button}>
          <Button
            color="#ffffff"
            title="Submit"
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};