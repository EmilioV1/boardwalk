import React from 'react';
import { Actions } from 'react-native-router-flux';
import { StyleSheet, ScrollView, View, TextInput, Button, Text } from 'react-native';

export default function ProfileScreen() {

  return (
    <View style={styles.container}>
      <Text style={styles.profileText}>Hello, I am the profile screen!</Text>
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
  }
});