import React from 'react';
import { Actions } from 'react-native-router-flux';
import { StyleSheet, ScrollView, View, TextInput, Button, Text } from 'react-native';

export default function OldDebt() {

  return (
    <View style={styles.container}>
      <Text style={styles.oldDebtText}>Hello, I am the old debt screen!</Text>
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

  oldDebtText: {
    color: '#fff'
  }

});