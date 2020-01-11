import React from 'react';
import { Actions } from 'react-native-router-flux';
import { StyleSheet, ScrollView, View, TextInput, Button, Text } from 'react-native';

export default function ProfileScreen() {

  return (
    <View style={styles.container}>
      <Text style={styles.profileText}>Hello, I am the profile screen!</Text>
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
    </View>
  );

};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#17233f',
    alignItems: 'center',
    justifyContent: 'center'
  },

  profileText: {
    color: '#fff'
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
  }
});